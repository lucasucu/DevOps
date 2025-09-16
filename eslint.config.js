import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js"],  // apenas os JS da pasta src
    languageOptions: {
      sourceType: "script" // para rodar no estilo Node.js comum
    },
    rules: {
      semi: "error",
      quotes: ["error", "double"]
    }
  }
];
