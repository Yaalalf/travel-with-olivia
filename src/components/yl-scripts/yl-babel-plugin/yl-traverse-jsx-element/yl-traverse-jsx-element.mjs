import traverse from "@babel/traverse";
import processJSXElement from "./yl-procces-jsx-element.mjs";
import * as parser from "@babel/parser";
import * as t from "@babel/types";
import template from "@babel/template";
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function traverseJSXElement({ ast }) {
  const traverseJSXElement = {
    JSXElement(path) {
      const jsxDataElement = processJSXElement({ path, node: path.node });

      if (jsxDataElement) {
        const jsxOpeningElement =
          jsxDataElement.openingTagData.jsxOpeningElement;
        // const jsxClosingElement = t.jsxClosingElement(t.jsxIdentifier("span"));
        const jsxElement = t.jsxElement(jsxOpeningElement, null, []);
        path.replaceWith(jsxElement);

        path.skip();
      }
    },
  };

  return traverse.default(ast, traverseJSXElement);
}
