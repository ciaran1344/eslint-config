/**
 * An ESLint base configuration which both JS and TS configs extend.
 *
 * {@see https://eslint.org/docs/latest/use/configure/configuration-files}
 */
module.exports = {
  plugins: ["import"],
  extends: ["eslint:recommended", "plugin:import/recommended"],
  rules: {
    /** {@see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md} */
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          orderImportKind: "desc", // `import type` first
        },
        groups: [
          "external", // `import _ from "lodash";`
          "builtin", // `import Fs from "node:fs";`
          "internal", // `import { foo } from "src";`
          "parent",
          "sibling",
          "index",
          "object", // `import { log } = console;`
        ],
        "newlines-between": "always",
      },
    ],
  },
};
