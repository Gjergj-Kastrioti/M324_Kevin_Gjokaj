import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
       sourceType: "module",
       globals: {
         ...globals.browser,
         describe: "readonly", // Fix for Mocha later
         it: "readonly"        // Fix for Mocha later
       }
    },
    rules: {
        "eqeqeq": "error",      // Custom Rule 1: Enforce ===
        "no-console": "warn"    // Custom Rule 2: Warn on console.log
    }
  },
  pluginJs.configs.recommended,
];