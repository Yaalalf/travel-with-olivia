import generate from "@babel/generator";

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function processObjectExpression({ path, expression }) {
  let value = {};
  const valueAst = expression;
  const { code } = generate.default(valueAst);
  value = eval(`(${code})`);

  return value;
}
