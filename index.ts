let hasValue: boolean = true;
// 型注釈という書き方
let masahito = false;
// 型推論という書き方 基本的には型推論を使いたい
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person = {
  name: {
    first: 'たけし',
    last: 'ごろうまる'
  },
  age: 25
}

const fruits: string[] = ['banana', 'negi', 'goma']
const otousan: [string, number, boolean] = ['gorira', 27, false]
// Tuple型というらしい 配列に厳しく型を制限するなら tupleを使用する。

console.log(person);