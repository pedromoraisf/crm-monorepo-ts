module.exports = {
  root: true,
  env: {
    commonjs: true,
    es6: true,
    browser: false,
    node: true,
  },
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  ignorePatterns: [".yarn/*", "**/node_modules/**"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    camelcase: 0,
  },
};
