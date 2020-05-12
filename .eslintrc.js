module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: [
    'html'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  // add your custom rules here
  // 具体规则解释可以参考：https://www.jianshu.com/p/29ca5a6a34fd
  'rules': {
  	"semi": [0],
    'eqeqeq': [0],
    // allow paren-less arrow functions
    'arrow-parens': 0, //箭头函数用小括号括起来
    "no-dupe-args": 2, //函数参数不能重复
    // allow async-await
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0
  }
}
