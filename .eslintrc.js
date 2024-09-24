module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  rules: {
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
