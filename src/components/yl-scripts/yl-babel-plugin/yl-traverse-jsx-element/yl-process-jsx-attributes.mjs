import * as t from "@babel/types";
import generate from "@babel/generator";
import processJSXExpressionContainer from "./yl-process-jsx-expression-container.mjs";
import processJSXSpreadAttribute from "./yl-process-jsx-spread-attribute.mjs";

export const JSXStylesAttribute = [
  "inlineSize",
  "blockSize",
  "padding",
  "paddingInline",
  "paddingInlineStart",
  "paddingInlineEnd",
  "paddingBlock",
  "paddingBlockStart",
  "paddingBlockEnd",
  "margin",
  "marginInline",
  "marginInlineStart",
  "marginInlineEnd",
  "marginBlock",
  "marginBlockStart",
  "marginBlockEnd",
  "display",
  "flexDirection",
  "alignItems",
  "justifyContent",
  "gap",
  "flexWrap",
  "order",
  "color",
  "fontSize",
  "lineHeight",
  "fontWeight",
  "fontFamily",
  "textTransform",
  "textShadow",
  "textAlign",
  "textDecoration",
  "backgroundColor",
  "backgroundImage",
  "backgroundRepeat",
  "backgroundPosition",
  "backgroundPosition-x",
  "backgroundPosition-y",
  "backgroundSize",
  "backgroundBlend-mode",
  "maskImage",
  "maskRepeat",
  "maskPosition",
  "maskSize",
  "boxShadow",
  "borderRadius",
  "borderStartStartRadius",
  "borderStartEndRadius",
  "borderEndStartRadius",
  "borderEndEndRadius",
  "border",
  "borderBlock",
  "borderBlockStart",
  "borderBlockEnd",
  "borderInline",
  "borderInlineStart",
  "borderInlineEnd",
  "position",
  "top",
  "left",
  "right",
  "bottom",
  "opacity",
  "overflow",
  "transformStyle",
  "transformOrigin",
  "transform",
  "translate",
  "rotate",
  "scale",
  "transition",
  "transitionProperty",
  "listStyle",
  "zIndex",
  "cursor",
  "backdropFilter",
  "userSelect",
  "filter",
  "boxSizing",
];
export const JSXDomAttribute = ["tag", "onClick", "className"];

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function processJSXAttributes({ path, attributes }) {
  const props = [];

  attributes.forEach((attribute) => {
    if (t.isJSXAttribute(attribute)) {
      if (t.isStringLiteral(attribute.value)) {
        props.push({
          name: attribute.name.name,
          value: attribute.value.value,
          astType: "StringLiteral",
          propertyType: JSXDomAttribute.includes(attribute.name.name)
            ? "DOM"
            : JSXStylesAttribute.includes(attribute.name.name)
            ? "STYLE"
            : "MISC",
        });
      }

      if (t.isJSXExpressionContainer(attribute.value)) {
        const value = processJSXExpressionContainer({
          path,
          expression: attribute.value.expression,
        });
        props.push({
          name: attribute.name.name,
          value: value,
          astType: "JSXExpressionContainer",
          propertyType: JSXDomAttribute.includes(attribute.name.name)
            ? "DOM"
            : JSXStylesAttribute.includes(attribute.name.name)
            ? "STYLE"
            : "MISC",
        });
      }
    }

    if (t.isJSXSpreadAttribute(attribute)) {
      const object = processJSXSpreadAttribute({
        path,
        argument: attribute.argument,
      });

      Object.entries(object.data).forEach((entry) => {
        props.push({
          name: entry[0],
          value: entry[1],
          astType: object.type,
          propertyType: JSXDomAttribute.includes(attribute.name.name)
            ? "DOM"
            : JSXStylesAttribute.includes(entry[0])
            ? "STYLE"
            : "MISC",
        });
      });
    }
  });

  return props;
}
