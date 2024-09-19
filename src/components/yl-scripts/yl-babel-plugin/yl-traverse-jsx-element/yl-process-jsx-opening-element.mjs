import processJSXAttributes from "./yl-process-jsx-attributes.mjs";
import { v4 as uuidv4 } from "uuid";
export const JSXValidNames = [
  "ylcontainer",
  "ylflexcontainer",
  "ylflexitem",
  "yltextheader",
];
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function processJSXOpeningElement({ path, node }) {
  let openingTag = undefined;
  //////////////////////////////////////////////////
  const tagName = node.name.name;
  openingTag.componentName = tagName;
  //////////////////////////////////////////////////
  if (JSXValidNames.includes(tagName.toLowerCase())) {
    console.log("Processing... " + tagName);
    console.log("Processing Opening Tag... ");
    //////////////////////////////////////////////////

    openingTag.selfClosing = node.selfClosing;
    console.log("Self Closing: " + openingTag.selfClosing);
    //////////////////////////////////////////////////

    switch (tagName.toLowerCase()) {
      case "ylcontainer":
        console.log("Component Type: " + openingTag.componentName);

        openingTag = {
          ...openingTag,
          ...processYLContainerOpeningTag({ path, node }),
        };
        break;
    }
  }
  return openingTag;
}

export function processYLContainerOpeningTag({ path, node }) {
  let openingTagProcesses = {};

  openingTagProcesses.props = processJSXAttributes({
    path,
    attributes: node.attributes,
  });

  openingTagProcesses = processComponent({ component: openingTagProcesses });

  return openingTagProcesses;
}

export function processComponent({ component }) {
  //////////////////////////////////////////////////////////////

  console.log("style attributes: ");
  component.props.forEach((attribute) => {
    console.log(
      attribute.name + " = " + attribute.value + " (" + attribute.astType + ")"
    );
  });
  //////////////////////////////////////////////////////////////
  const classNameProp = component.props.find(
    (attribute) => attribute.name == "className"
  );
  if (!classNameProp) {
    const uuidClassName = `yl-${uuidv4()}`;
    component.props.push({
      name: "className",
      value: uuidClassName,
      astType: "StringLiteral",
      propertyType: "DOM",
    });
    console.log("Assigning a className: " + uuidClassName);
  } else {
    console.log("Assigned className: " + classNameProp.value);
  }
  //////////////////////////////////////////////////////////////

  const domProps = component.props.filter((prop) => prop.propertyType == "DOM");
  const styleProps = component.props.filter(
    (prop) => prop.propertyType == "STYLE"
  );

  const tag = component.props.find((item) => item.name == "tag").value || "div";

  component.tag = tag;
  component.domProps = domProps;
  component.styleProps = styleProps;

  // domProps.reduce((acum, val) => {
  //   console.log(val);
  //   return ``;
  // });

  //////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////

  return component;
}
