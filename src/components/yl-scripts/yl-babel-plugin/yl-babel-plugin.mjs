// node ./src/components/yl-scripts/yl-babel-plugin/yl-babel-plugin.mjs ./src/components/yl-web-landing-page/yl-title-headers/yl-title-header-double-text/yl-title-header-double-text.tsx

import * as parser from "@babel/parser";
import generate from "@babel/generator";

import * as fs from "node:fs";
import * as path from "node:path";
import traverseJSXElement from "./yl-traverse-jsx-element/yl-traverse-jsx-element.mjs";

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

const basePath = process.argv[2];

const code = fs.readFileSync(basePath).toString();

const ast = parser.parse(code, {
  sourceType: "module",
  plugins: ["jsx", "typescript"],
});

// traverseToFindVariables(ast);

traverseJSXElement({ ast });

const output = generate.default(ast);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

if (!fs.existsSync(path.join(process.cwd(), "components_transpiled"))) {
  fs.mkdirSync(path.join(process.cwd(), "components_transpiled"));
}

fs.writeFileSync(
  path.join(process.cwd(), "components_transpiled", path.basename(basePath)),
  output.code
);
