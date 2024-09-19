import generate from "@babel/generator";
import { isObjectExpression } from "@babel/types";
import processObjectExpression from "./yl-process-object-expression.mjs";
import { isStringLiteral } from "@babel/types";

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function processVariableDeclarator({ path, declaration }) {
  let variable = {};

  variable.name = declaration.id.name;

  if (isObjectExpression(declaration.init)) {
    variable.value = processObjectExpression({
      path,
      expression: declaration.init,
    });
    variable.type = "Object";
  }

  if (isStringLiteral(declaration.init)) {
    let value = {};
    const valueAst = declaration.init;
    const { code } = generate.default(valueAst);
    value = eval(code);
    variable.value = value;
    variable.type = "String";
  }

  return variable;
}
