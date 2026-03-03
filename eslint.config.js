import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort"; // 👈 novo

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { 
      js,
      "simple-import-sort": simpleImportSort // 👈 novo
    },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },

    rules: {
      // 🗂️ Organização de imports
      "simple-import-sort/imports": "error",  // ordena imports
      "simple-import-sort/exports": "error",  // ordena exports

      // 🚫 Qualidade geral
      "no-console": "warn",
      "no-var": "error",
      "prefer-const": "warn",
      "eqeqeq": ["error", "always"],
      "no-unused-expressions": "warn",

      // 🔷 TypeScript
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_"
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",

      // 🧹 Boas práticas
      "no-duplicate-imports": "error",
      "no-return-await": "warn",
    }
  },
  tseslint.configs.recommended,
  eslintConfigPrettier,
]);