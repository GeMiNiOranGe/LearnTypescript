import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts}"]
    },
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            indent: ["error", 4, {
                SwitchCase: 1,
            }],
            "linebreak-style": [
                "error",
                "windows",
            ],
            semi: [
                "error",
                "always",
            ],
            quotes: [
                "error",
                "double",
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
            ],
            curly: "error",
            "prefer-const": "off",
        },
    },
];