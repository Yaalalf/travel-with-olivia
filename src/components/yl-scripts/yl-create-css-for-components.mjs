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

const className = findCSSClassName(cssText);
const cssVars = findAllVarsInCSSText(cssText);
const cssProperties = findAllPropertiesInCSSText(cssText);
console.log(cssVars);

mediaQueryObject.mobile.forEach((item, index) => {
  const cssText = createCSSTextMediaQueryStyle({
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
  const cssText = createCSSTextMediaQueryStyle({
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

createCSSTextStatesStyle({ className, cssVars, cssProperties });

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

function findCSSClassName(cssText = "") {
  console.log("searching-css-class");

  let processedCSSText = cssText;
  const firstIndexPosition = processedCSSText.indexOf(".");
  const firstPosition = processedCSSText.indexOf("{");
  const secondPosition = processedCSSText.indexOf("{", firstPosition + 1);

  const cssClass = processedCSSText
    .substring(firstIndexPosition, secondPosition)
    .trim();
  console.log("found-css-class: " + cssClass);

  return cssClass;
}
function findAllVarsInCSSText(cssText = "") {
  console.log("searching-css-vars");

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
  console.log("found-css-vars: " + cssVarsArray);

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
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

function createCSSTextStatesStyle({ className, cssVars, cssProperties }) {
  const cssTextHover = createCSSTextHoverStyle({
    className,
    cssVars,
    cssProperties,
  });
  const cssTextParentHover = createCSSTextParentHoverStyle({
    className,
    cssVars,
    cssProperties,
  });
  const cssTextChildHover = createCSSTextChildHoverStyle({
    className,
    cssVars,
    cssProperties,
  });
  const cssTextActive = createCSSTextActiveStyle({
    className,
    cssVars,
    cssProperties,
  });
  const cssTextParentActive = createCSSTextParentActiveStyle({
    className,
    cssVars,
    cssProperties,
  });
  const cssTextChildActive = createCSSTextChildActiveStyle({
    className,
    cssVars,
    cssProperties,
  });
  const cssTextStates = `@layer yl-layout{
    ${cssTextHover} 
    ${cssTextParentHover} 
    ${cssTextChildHover}
    ${cssTextActive} 
    ${cssTextParentActive}
    ${cssTextChildActive}
  }`;

  fs.writeFileSync(path.join(basePath, `states.css`), cssTextStates);
}

function createCSSTextHoverStyle({ className, cssVars, cssProperties }) {
  let cssText = `
      /**********************HoverVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map((item) => `${item}-hover : var(${`${item}`});`)
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************HoverStyles********************************/
  /**********************************************************/
  ${className}:hover{
    ${cssProperties
      .map(
        (item) => `${item}: var(--${className.replace(".", "")}-${item}-hover);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 

      [data-parent-hover="true"]:hover ${className}:hover{
        ${cssProperties
          .map(
            (item) =>
              `${item}: var(--${className.replace(".", "")}-${item}-hover);`
          )
          .toString()
          .replace(/,/g, "")} 
          }  
`;
  return cssText;
}
function createCSSTextParentHoverStyle({ className, cssVars, cssProperties }) {
  let cssText = `
      /**********************ParentHoverVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map((item) => `${item}-parent-hover : var(${`${item}`});`)
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ParentHoverStyles********************************/
  /**********************************************************/
  [data-parent-hover="true"]:hover ${className}{
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(".", "")}-${item}-parent-hover);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
  
`;
  return cssText;
}

function createCSSTextChildHoverStyle({ className, cssVars, cssProperties }) {
  let cssText = `
      /**********************ChildHoverVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map((item) => `${item}-child-hover : var(${`${item}`});`)
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ChildHoverStyles********************************/
  /**********************************************************/
  ${className}:has([data-child-hover="true"]:hover) {
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(".", "")}-${item}-child-hover);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
  
`;
  return cssText;
}

function createCSSTextActiveStyle({ className, cssVars, cssProperties }) {
  let cssText = `
      /**********************ActiveVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map((item) => `${item}-active : var(${`${item}`});`)
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ActiveStyles********************************/
  /**********************************************************/
  ${className}:active{
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(".", "")}-${item}-active);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 

      [data-parent-active="true"]:active ${className}:hover{
        ${cssProperties
          .map(
            (item) =>
              `${item}: var(--${className.replace(
                ".",
                ""
              )}-${item}-parent-active);`
          )
          .toString()
          .replace(/,/g, "")} 
          }  
`;
  return cssText;
}
function createCSSTextParentActiveStyle({ className, cssVars, cssProperties }) {
  let cssText = `
      /**********************ParentActiveVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map((item) => `${item}-parent-active : var(${`${item}`});`)
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ParentActiveStyles********************************/
  /**********************************************************/
  [data-parent-active="true"]:active ${className}{
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(".", "")}-${item}-parent-active);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
  
`;
  return cssText;
}
function createCSSTextChildActiveStyle({ className, cssVars, cssProperties }) {
  let cssText = `
      /**********************ChildActiveVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map((item) => `${item}-child-active : var(${`${item}`});`)
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ChildActiveStyles********************************/
  /**********************************************************/
  ${className}:has([data-child-active="true"]:active) {
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(".", "")}-${item}-child-active);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
  
`;
  return cssText;
}
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
function createCSSTextMediaQueryStyle({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  const cssTextDefaultStyle = createCSSTextDefaultMediaQueryStyle({
    className,
    cssVars,
    cssProperties,
    minWidth,
    maxWidth,
    minDefault,
    maxDefault,
    isFull,
  });

  const cssTextHover = createCSSTextMediaQueryHoverStyle({
    className,
    cssVars,
    cssProperties,
    minWidth,
    maxWidth,
    minDefault,
    maxDefault,
    isFull,
  });
  const cssTextParentHover = createCSSTextMediaQueryParentHoverStyle({
    className,
    cssVars,
    cssProperties,
    minWidth,
    maxWidth,
    minDefault,
    maxDefault,
    isFull,
  });
  const cssTextChildHover = createCSSTextMediaQueryChildHoverStyle({
    className,
    cssVars,
    cssProperties,
    minWidth,
    maxWidth,
    minDefault,
    maxDefault,
    isFull,
  });
  const cssTextActive = createCSSTextMediaQueryActiveStyle({
    className,
    cssVars,
    cssProperties,
    minWidth,
    maxWidth,
    minDefault,
    maxDefault,
    isFull,
  });
  const cssTextParentActive = createCSSTextMediaQueryParentActiveStyle({
    className,
    cssVars,
    cssProperties,
    minWidth,
    maxWidth,
    minDefault,
    maxDefault,
    isFull,
  });
  const cssTextChildActive = createCSSTextMediaQueryChildActiveStyle({
    className,
    cssVars,
    cssProperties,
    minWidth,
    maxWidth,
    minDefault,
    maxDefault,
    isFull,
  });

  let cssText = `@layer yl-layout{
    @media (${minWidth}px <= width < ${maxWidth}px){
      ${cssTextDefaultStyle}
      ${cssTextHover} 
      ${cssTextParentHover} 
      ${cssTextChildHover}
      ${cssTextActive} 
      ${cssTextParentActive}
      ${cssTextChildActive}
    } 
  }
`;
  return cssText;
}

function createCSSTextDefaultMediaQueryStyle({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  let cssText = `
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
  
`;
  return cssText;
}

function createCSSTextMediaQueryHoverStyle({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  let cssText = `
      /**********************HoverVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map(
        (item) =>
          `${item}-${minWidth}-${maxWidth}-hover : var(${
            isFull
              ? `${item}-hover`
              : `${item}-${minDefault}-${maxDefault}-hover`
          });`
      )
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************HoverStyles********************************/
  /**********************************************************/
  ${className}:hover{
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(
            ".",
            ""
          )}-${item}-${minWidth}-${maxWidth}-hover);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 

      [data-parent-hover="true"]:hover ${className}:hover{
        ${cssProperties
          .map(
            (item) =>
              `${item}: var(--${className.replace(
                ".",
                ""
              )}-${item}-${minWidth}-${maxWidth}-hover);`
          )
          .toString()
          .replace(/,/g, "")} 
          }  
`;
  return cssText;
}
function createCSSTextMediaQueryParentHoverStyle({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  let cssText = `
      /**********************ParentHoverVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map(
        (item) =>
          `${item}-${minWidth}-${maxWidth}-parent-hover : var(${
            isFull
              ? `${item}-parent-hover`
              : `${item}-${minDefault}-${maxDefault}-parent-hover`
          });`
      )
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ParentHoverStyles********************************/
  /**********************************************************/
  [data-parent-hover="true"]:hover ${className}{
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(
            ".",
            ""
          )}-${item}-${minWidth}-${maxWidth}-parent-hover);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
  
`;
  return cssText;
}

function createCSSTextMediaQueryChildHoverStyle({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  let cssText = `
      /**********************ChildHoverVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map(
        (item) =>
          `${item}-${minWidth}-${maxWidth}-child-hover : var(${
            isFull
              ? `${item}-child-hover`
              : `${item}-${minDefault}-${maxDefault}-child-hover`
          });`
      )
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ChildHoverStyles********************************/
  /**********************************************************/
  ${className}:has([data-child-hover="true"]:hover) {
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(
            ".",
            ""
          )}-${item}-${minWidth}-${maxWidth}-child-hover);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
  
`;
  return cssText;
}

function createCSSTextMediaQueryActiveStyle({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  let cssText = `
      /**********************ActiveVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map(
        (item) =>
          `${item}-${minWidth}-${maxWidth}-active : var(${
            isFull
              ? `${item}-active`
              : `${item}-${minDefault}-${maxDefault}-active`
          });`
      )
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ActiveStyles********************************/
  /**********************************************************/
  ${className}:active{
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(
            ".",
            ""
          )}-${item}-${minWidth}-${maxWidth}-active);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 

      [data-parent-active="true"]:active ${className}:hover{
        ${cssProperties
          .map(
            (item) =>
              `${item}: var(--${className.replace(
                ".",
                ""
              )}-${item}-${minWidth}-${maxWidth}-parent-active);`
          )
          .toString()
          .replace(/,/g, "")} 
          }  
`;
  return cssText;
}
function createCSSTextMediaQueryParentActiveStyle({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  let cssText = `
      /**********************ParentActiveVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map(
        (item) =>
          `${item}-${minWidth}-${maxWidth}-parent-active : var(${
            isFull
              ? `${item}-parent-active`
              : `${item}-${minDefault}-${maxDefault}-parent-active`
          });`
      )
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ParentActiveStyles********************************/
  /**********************************************************/
  [data-parent-active="true"]:active ${className}{
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(
            ".",
            ""
          )}-${item}-${minWidth}-${maxWidth}-parent-active);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
  
`;
  return cssText;
}
function createCSSTextMediaQueryChildActiveStyle({
  className,
  cssVars,
  cssProperties,
  minWidth,
  maxWidth,
  minDefault,
  maxDefault,
  isFull,
}) {
  let cssText = `
      /**********************ChildActiveVars****************************/
      /**********************************************************/
    ${className}{
    ${cssVars
      .map(
        (item) =>
          `${item}-${minWidth}-${maxWidth}-child-active : var(${
            isFull
              ? `${item}-child-active`
              : `${item}-${minDefault}-${maxDefault}-child-active`
          });`
      )
      .toString()
      .replace(/,/g, "")} 
  } 
  /**************************ChildActiveStyles********************************/
  /**********************************************************/
  ${className}:has([data-child-active="true"]:active) {
    ${cssProperties
      .map(
        (item) =>
          `${item}: var(--${className.replace(
            ".",
            ""
          )}-${item}-${minWidth}-${maxWidth}-child-active);`
      )
      .toString()
      .replace(/,/g, "")} 
      } 
  
`;
  return cssText;
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

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
