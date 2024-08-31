// test script values
// npm run cssForComponent ./src/components/yl-layouts/yl-flex-container

import * as fs from "fs";
import * as path from "path";

const baseDir = process.argv[2];
const basePath = path.join(baseDir, "style");
const baseCSSFile = path.join(basePath, "base.css");

const mediaQueryObject = {
  mobile: [
    { min: 360, max: 1024 },
    { min: 360, max: 480 },
    { min: 480, max: 600 },
    { min: 600, max: 900 },
    { min: 900, max: 1024 },
  ],
  desktop: [
    { min: 1024, max: 1920 },
    { min: 1024, max: 1280 },
    { min: 1280, max: 1440 },
    { min: 1440, max: 1600 },
    { min: 1600, max: 1920 },
  ],
};

const cssText = fs.readFileSync(baseCSSFile).toString();

findAllPropertiesInCSSText(cssText);
const className = findCSSClassName(cssText);
const cssVars = findAllVarsInCSSText(cssText);
const cssProperties = findAllPropertiesInCSSText(cssText);

mediaQueryObject.mobile.forEach((item, index) => {
  const cssText = createCSSTextMediaQuery({
    className,
    cssVars,
    cssProperties,
    minWidth: item.min,
    maxWidth: item.max,
    minDefault: mediaQueryObject.mobile[0].min,
    maxDefault: mediaQueryObject.mobile[0].max,
    isFull: index == 0,
  });

  fs.writeFileSync(
    path.join(basePath, "mobile", `${item.min}-${item.max}.css`),
    cssText
  );
});

mediaQueryObject.desktop.forEach((item, index) => {
  const cssText = createCSSTextMediaQuery({
    className,
    cssVars,
    cssProperties,
    minWidth: item.min,
    maxWidth: item.max,
    minDefault: mediaQueryObject.desktop[0].min,
    maxDefault: mediaQueryObject.desktop[0].max,
    isFull: index == 0,
  });

  fs.writeFileSync(
    path.join(basePath, "desktop", `${item.min}-${item.max}.css`),
    cssText
  );
});

function findCSSClassName(cssText = "") {
  let processedCSSText = cssText;

  const firstIndexPosition = processedCSSText.indexOf(".");
  const firstPosition = processedCSSText.indexOf("{");
  const secondPosition = processedCSSText.indexOf("{", firstPosition + 1);

  return processedCSSText.substring(firstIndexPosition, secondPosition).trim();
}
function findAllVarsInCSSText(cssText = "") {
  const cssVarsArray = [];

  let processedCSSText = cssText;
  let indexPosition = 0;

  const lastIndexPosition = processedCSSText.indexOf("}");

  while (processedCSSText.indexOf("--", indexPosition) < lastIndexPosition) {
    let initVarIndex = processedCSSText.indexOf("--", indexPosition);
    let endVarIndex = processedCSSText.indexOf(":", initVarIndex);

    let cssVarText = processedCSSText.substring(initVarIndex, endVarIndex);

    cssVarsArray.push(cssVarText);

    indexPosition = endVarIndex;
  }

  return cssVarsArray;
}

function findAllPropertiesInCSSText(cssText = "") {
  let cssPropertiesArray = [];

  let processedCSSText = cssText;
  let indexPosition = processedCSSText.indexOf("Styles");
  indexPosition = processedCSSText.indexOf("{", indexPosition);
  const lastIndexPosition = processedCSSText.indexOf("}", indexPosition);

  let cssRule = cssText.substring(indexPosition + 1, lastIndexPosition);
  let cssRuleTrimmed = cssRule.replace(/\s/g, "");
  let cssPropertiesStrings = cssRuleTrimmed.split(";");

  cssPropertiesStrings.forEach((item) => {
    let cssSplittedRule = item.split(":");

    cssPropertiesArray.push({
      property: cssSplittedRule[0],
      value: cssSplittedRule[1],
    });
  });
  cssPropertiesArray = cssPropertiesArray.filter((item) => {
    if (item.value) {
      return item.value.includes("var(");
    } else {
      return false;
    }
  });

  cssPropertiesArray = cssPropertiesArray.map((item) => item.property);

  return cssPropertiesArray;
}

function createCSSTextMediaQuery({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  let cssText = `@layer yl-layout{
    @media (${minWidth}px <= width < ${maxWidth}px){
      /**********************Vars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map(
        (item) =>
          `${item}-${minWidth}-${maxWidth} : var(${
            isFull ? `${item}` : `${item}-${minDefault}-${maxDefault}`
          });`
      )
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************Styles********************************/
  /**********************************************************/
  ${className}{
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(
            ".",
            ""
          )}-${item}-${minWidth}-${maxWidth});`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
    } 
  }
`;
  return cssText;
}
