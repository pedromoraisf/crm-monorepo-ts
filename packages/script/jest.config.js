const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  testMatch: ["<rootDir>/__test__/**/**/*.spec.js?(x)"],
  clearMocks: true,
  testEnvironment: "node",
  moduleDirectories: [".", "src", "__test__", "node_modules"],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/__test__/$1",
  },
};
