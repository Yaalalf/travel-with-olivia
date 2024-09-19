import traverse from "@babel/traverse";
import generate from "@babel/generator";
import processVariableDeclaration from "./yl-process-variable-declaration.mjs";

export const fileVariables = [];

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

export default function traverseToFindVariables(ast) {
  const variableTraverse = {
    VariableDeclaration(path) {
      fileVariables.push(processVariableDeclaration({ path, node: path.node }));
    },
  };

  traverse.default(ast, variableTraverse);

  // console.log(fileVariables);
}
