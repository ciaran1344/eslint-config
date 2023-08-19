/** {@see https://eslint.org/docs/latest/use/configure/configuration-files} */
module.exports = {
  plugins: ["@typescript-eslint", "import"],
  extends: [
    // Relative to plugin
    "./configs/base",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  rules: {
    /** {@see https://typescript-eslint.io/rules/ban-types} */
    "@typescript-eslint/ban-types": "off",
  },
};
