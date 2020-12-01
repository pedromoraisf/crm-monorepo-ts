/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require("path");
const root = resolve(__dirname);

module.exports = {
  rootDir: root,
  testMatch: ["<rootDir>/__test__/**/**/*.spec.ts?(x)"],
  clearMocks: true,
  testEnvironment: "jsdom",
  moduleDirectories: [".", "src", "__test__", "node_modules"],
  preset: "ts-jest",
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/__test__/$1",
  },
};
