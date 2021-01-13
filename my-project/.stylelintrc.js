module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: [
    'stylelint-config-standard', //ベースの設定ファイル
    'stylelint-prettier/recommended',
  ],

  // .prettierrc.jsの内容を上書きしたい時は rules から可能
  rules: {
    //'prettier/prettier': [true, { singleQuote: false, useTabs: true }],
    'order/properties-alphabetical-order': true, //ABC順に並べる
    'at-rule-no-unknown': null, //scssで使える @include などにエラーがでないようにする
    'scss/at-rule-no-unknown': true, //scssでもサポートしていない @ルール にはエラーを出す
  },
};
