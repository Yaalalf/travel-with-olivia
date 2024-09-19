import processJSXOpeningElement from "./yl-process-jsx-opening-element.mjs";
import * as t from "@babel/types";
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function processJSXElement({ path, node }) {
  const openingTagProcesses = processJSXOpeningElement({
    path: path,
    node: node.openingElement,
  });

  if (openingTagProcesses) {
    const jsxOpeningElementObject = t.jsxOpeningElement(
      t.jsxIdentifier(openingTagProcesses.tag),
      openingTagProcesses.domProps
        .filter((prop) => prop.name != "tag")
        .map((prop) => {
          return t.jsxAttribute(
            t.jsxIdentifier(prop.name),
            t.stringLiteral(prop.value)
          );
        }),
      openingTagProcesses.selfClosing
    );
    // console.log(openingTagProcesses);

    // const jsxElement = t.jsxElement();
    return {
      openingTagData: {
        ...openingTagProcesses,
        jsxOpeningElement: jsxOpeningElementObject,
      },
    };
  } else {
    return undefined;
  }
}
