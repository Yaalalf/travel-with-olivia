import generate from "@babel/generator";
import * as t from "@babel/types";

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function processJSXSpreadAttribute({ path, argument }) {
  const object = {};
  if (t.isObjectExpression(argument)) {
    const { code } = generate.default(argument);
    object.data = eval(`(${code})`);
    object.type = "ObjectExpression";
  }
  if (t.isIdentifier(argument)) {
    object.data = {};
    object.type = "null";
  }
  return object;
}
