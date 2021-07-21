const path = require('path');

module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    plugins: [
        'babel',
        'import',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: false,
        },
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': 0,
        'arrow-parens': 'off', // Несовместимо с prettier

        'prefer-destructuring': 'off',

        'indent': ['error', 4, {ignoreComments: true}],
        'max-len': ['error', {
            code: 150,
            // comments: 160,
            tabWidth: 4,
            ignoreComments: true,
            ignorePattern: '<!--(.+)-->',
            ignoreStrings: true,
        }],
        'brace-style': ['error', 'stroustrup'],
        'prefer-template': 'off',
        'spaced-comment': 'off', // подумать стоит ли добавлять
        'object-curly-spacing': ['error', 'never'],
        'no-underscore-dangle': 'off',
        'prefer-promise-reject-errors': 'off', // в принципе можно включить
        'class-methods-use-this': 'off',
        'guard-for-in': 'off',
        'import/newline-after-import': 'off',
        'import/first': 'off',
        'import/extensions': ['error', 'never'],
        'no-restricted-syntax': 'off',
        'no-new': 'off', // для main.js проверить где ещё уберет
        'object-shorthand': ['error', 'methods'],
        'vue/script-indent': ['error', 4,  {
            baseIndent: 1,
            switchCase: 1,
        }],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/require-v-for-key': 'off', // не понимаю зачем key...
        'vue/attributes-order': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/order-in-components': 'off',
        'no-console': 'warn',
        'no-alert': 'error',
        'no-param-reassign': 'off', // с одной стороны правильно, с другой стороны можно подзабить
        'no-plusplus': 'off',
        'arrow-body-style': 'off',
        'no-shadow': 'off', // проверять где ещё может выскочить
        'vue/max-attributes-per-line': ['error', {
            'singleline': 2,
            'multiline': {
                'max': 1,
                'allowFirstLine': false,
            },
        }],
        // "quotes": [2, "double", { "avoidEscape": true }],
        "object-curly-spacing": [2, "always", {
            "objectsInObjects": false,
            "arraysInObjects": false
        }],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: path.resolve(__dirname) + '/node_modules/@vue/cli-service/webpack.config.js',
            },
        },
    },
};
