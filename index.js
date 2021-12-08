var hasValue = true;
// 型注釈という書き方
var masahito = false;
// 型推論という書き方 基本的には型推論を使いたい
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: {
        first: 'たけし',
        last: 'ごろうまるさん'
    },
    age: 25
};
var fruits = ['banana', 'negi', 'goma'];
var otousan = ['gorira', 27, false];
// Tuple型というらしい 配列に厳しく型を制限するなら tupleを使用する。
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "short";
    CoffeeSize["TALL"] = "tall";
    CoffeeSize["GRANDE"] = "grande";
})(CoffeeSize || (CoffeeSize = {}));
// Typescriptの列挙型 enum値を設定する場合はこのように記述する。
var cofee = {
    hot: true,
    size: CoffeeSize.SHORT
};
console.log(person);
