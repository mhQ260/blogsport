module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    ignorePatterns: [
        'dist',
        'node_modules',
        'public',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'arrow-parens': [
            'error',
            'as-needed',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'no-unused-expressions': [
            'error',
            { allowTernary: true },
        ],
        'implicit-arrow-linebreak': [
            'off',
            'beside',
        ],
        'space-before-function-paren': [
            'warn',
            'never',
        ],
        quotes: [
            'error',
            'single',
        ],
        indent: [
            'error',
            2,
        ],
        semi: [
            'error',
            'always',
        ],
        eqeqeq: 'error',
        'array-element-newline': [
            'error',
            {
              multiline: true,
              minItems: 2,
            },
        ],
        'array-bracket-newline': [
            'error',
            {
              multiline: true,
              minItems: 2,
            },
        ],
          'array-bracket-spacing': [
            'error',
            'never',
        ],
          'object-curly-newline': [
            'error',
            { consistent: true },
        ],
          'object-curly-spacing': [
            'error',
            'always',
        ],
        'no-irregular-whitespace': [
            'error',
            { skipTemplates: true },
        ],
        //ts
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/member-delimiter-style': [
        'error',
        {
            multiline: {
            delimiter: 'semi',
            requireLast: true,
            },
            singleline: {
            delimiter: 'semi',
            requireLast: false,
            },
            multilineDetection: 'brackets',
        },
        ],
        '@typescript-eslint/no-explicit-any': 'off', 
        '@typescript-eslint/explicit-module-boundary-types': 'off', 
        //vue
        'vue/no-unused-components': 'error',
        'vue/no-v-html': 'off',
        'vue/eqeqeq': 'error',
        'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
            registeredComponentsOnly: false,
            ignores: [],
        },
        ],
        'vue/v-on-function-call': 'error',
        'vue/require-name-property': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/no-reserved-component-names': 'error',
        'vue/script-setup-uses-vars': 'error',
    },
    overrides: [
        {
          files: ['**/*.spec.{j,t}s?(x)'],
          env: {
            jest: true,
          },
        },
    ],
};
