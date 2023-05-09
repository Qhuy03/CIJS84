//1. let và const

// var/let và const
// var và let dùng cho biến
//const dùng cho hằng

// var a = 10;
// console.log(a);
// a = 20;
// console.log(a);

//var/let dùng để khởi tạo những biến mà có thể thay đổi giá trị
//const dùng để khởi tạo nhưng biến hằng số
//var và let/const
//biến được khởi tạo bằng từ khóa let/const thì chỉ có phạm vi sử dụng trong scope
//biến được khởi tạo bằng từ khóa var thù sẽ có phạm vi global scope


// function get(){
//     var a = 10;
//     console.log(a);
// }
// get();
// console.log(a);

// -hoisting
// a = 10;
// console.log(a);
// //let a; // sẽ lỗi
// var a;
// console.log(a);

//2. Arrow Function
// function sum(a, b) {
//     console.log("sum 2 numbers");
//       return a + b;
// }
// console.log(sum(3, 5));

// const sum = function(a, b) {
// 	console.log("sum 2 numbers");
// 	return a + b;
// };
// const sum = (a, b) => a + b;

// console.log(sum(3, 5));

// let/ const/var nameFunction = (parameters) => {
//     //Đoạn code  thưc thi
// }


// //b1: var khai báo một biến có phạm vi trong block?
// //false

// //b2: const khai báo một biến có phạm vi trong block?
// //true

// //b3: let khai báo một biến có phạm vi trong block?
// //true

// //b4
// const obj = { foo: 1 }
// obj.bar = 2
// console.log(obj);// đáp án 3.

// //b5
// const speed = 'quick'
// console.log(`The ${speed} brown fox jumps over the lazy dog.`)
// //'The quick brown fox jumps over the lazy dog.’

// //b6
// const obj = {

// }
// obj[123];
// // đáp án là undefined

//b7
// const array = [1, 2, 3];
// const extension = [4, 5, 6];

// array = [...extension, ...array];
// console.log(array);
//đáp án là erron

//b8 đáp án là đáp án 2.
// function mystery(...params) {
// 	return params
// }
// let a = mystery(1, 23, 4);
// console.log(a);

// //b9 đáp án là đáp án 1 kết quả 3
// let a = [...[..."..."]].length;
// console.log(a);

//b10
// let a = 12, b = 3;
// [a, b] = [b, a];
// console.log(a, b);
//a = 3, b =12;

//b11 đáp án là Mindx
// const obj = {
// 	name: "MindX"
// }
// const sayHello = (x) => {
// 	let {name} = x
//   name = "Code Intensive"
// }
// sayHello(obj)
// console.log(obj);

// //b12
// let arr = [1, 2, 3, 4, 5]
// arr.map(item => {
//   if (item % 2 === 0) {
// 		return item;
//   }
// 	return item * 2;
// })

// console.log(arr);
// //đáp án là 1

// //b13
// const arr = [1, 2, 3, 4, 5]
// const total = arr.filter(item => item % 2 === 0)
// 								 .reduce((value, item) => value + item , 10)
// console.log(total);//16

//Destructuring
const date = {
    d : 5,
    m : 7,
    y : 2023,
};
const {d : day, m, y = 2025} = date;
console.log(d);// erron vì tên biến đã bị đổi
console.log(m);
console.log(y);// ưu tiên giá trị trong obj hơn
