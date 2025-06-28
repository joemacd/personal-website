import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      js,
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "prettier/prettier": "error",
    },
  },
  prettierConfig,
]);
