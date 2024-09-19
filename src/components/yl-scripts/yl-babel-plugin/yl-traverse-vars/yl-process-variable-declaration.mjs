import processVariableDeclarator from "./yl-process-variable-declarators.mjs";

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function processVariableDeclaration({ path, node }) {
  let variable = {};
  if (node.declarations.length == 1) {
    variable = processVariableDeclarator({
      path,
      declaration: node.declarations[0],
    });
  }

  return variable;
}
