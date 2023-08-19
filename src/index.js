const javascript = require("./configs/javascript");
const typescript = require("./configs/typescript");
const vitest = require("./configs/vitest");

module.exports = {
  /** {@see https://eslint.org/docs/latest/extend/plugins#configs-in-plugins} */
  configs: {
    javascript,
    typescript,
    vitest,
  },
};
