module.exports = {
    
   "parserOptions": {
    "ecmaVersion": 2017
   },
    
  "env": { // コードが実行される環境を設定する
    "browser": true, // ブラウザで実行する
    "es6": true // ES6の機能を使う
  },
  "globals": { // グローバルスコープの変数を追加する
      "$": true, // jQuery
      "MobileDetect": true, 
      "firebase": true, 
      "moment": true,
      "Vue": true, 
      "VueCarousel": true
  },
  "rules": { // ESLintのルールを設定する
    "indent": ["error", 2], // インデントを半角スペース２つにする
    "no-dupe-args": "error", // 関数に、重複する引数を定義しない
    "no-dupe-keys": "error", // オブジェクトに、重複するプロパティ名を定義しない
    "no-func-assign": "error",  // 関数を上書き（再代入）しない
    "no-redeclare": "error", // 変数を重複して宣言しない
    "no-const-assign": "error", // constで定義した変数に、値を再代入しない
    "no-return-assign": "error", // returnするときに、代入演算子の「=」を使わない
    "no-unexpected-multiline": "error", // 紛らわしい箇所で、改行をしない
    "no-unreachable": "error", // returnの後など、実行されないコードを書かない
    "no-unused-expressions": "error", // 使わない値を計算したり、連結したりしない
  }
};