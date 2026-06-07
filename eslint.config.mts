import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    tseslint.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        rules: {
            '@typescript-eslint/no-unsafe-declaration-merging': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            'no-redeclare': 'off',
            '@typescript-eslint/no-redeclare': 'error',
            '@typescript-eslint/no-empty-object-type': [
                'error',
                {
                    'allowInterfaces': 'with-single-extends'
                }
            ]
        },
    },
]);
