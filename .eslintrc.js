const WARN = (process.env.CI == 'true') ? 'error' : 'warn'


module.exports = {
  'extends': 'airbnb',
  'globals': {
    'document': true,
    'localStorage': true,
    'window': true,
  },
  "parser": "babel-eslint",
  'rules': {
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'indent': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-quotes': 0,
    'max-len': [WARN, 100], // 1行の長さ80文字以上は警告
    'no-else-return': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'object-shorthand': 0,
    'prefer-template': 0,
    'quote-props': 0,
    'react/jsx-filename-extension': [
      1, {'extensions': ['.js', '.jsx']}
    ],
    'react/jsx-indent': 0,
    'react/prop-types': 0,
    'semi': [WARN, 'never'],
  },
}
