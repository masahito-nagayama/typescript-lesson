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
        last: 'ごろうまる'
    },
    age: 25
};
var fruits = ['banana', 'negi', 'goma'];
var otousan = ['gorira', 27, false];
// Tuple型というらしい 配列に厳しく型を制限するなら tupleを使用する。
console.log(person);
