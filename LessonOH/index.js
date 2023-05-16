// //-Arrow Function
// const/let/var tenFunction = (parameter1,parameter2,parameter3,...)=>{
//     //code block
// }

// Bài tập : Viết 1 hàm tính tổng bằng cách sử dụng Arrow Function
// //Input 2,6
// //Out put 8

// const sum = (a,b) =>  a + b;

// console.log(sum(2,6));

// //Viết hàm tính bình phường của 1 số n
// // input 6 và out put là 36
// const volume =(n)=>{
//     return n**2;
// };
// console.log(volume(6));

//-Arrow Function không có hoisting
//-Arrow Function không có context

// logger();
// function logger() {
//         console.log('Xin chào')
// }// có thể gọi trc khi khai báo

// const logger=()=>{
//     console.log('XIn chào');
// }

// logger();//khai báo trc mới gọi đc

//-Template literal
// const maLop = 'CIJS84';
// // const str = 'MindX ' + maLop + '\nHọc ở Thành Công-Hà Nội';
// // const str = 'MindX CIJS84'+ '\nHọc ở Thành Công';

// // const str = `MindX CIJS84
// // Học ở Thành Công`;

// const str = `
// Mindx ${maLop}
// Học ở TP Hà Nội
// `

// console.log(str);

//-Spread & Rest Operator
// Một số ứng dụng với spread operator:

// - Sao chép array, object
// const num1 = [1,2,3];
// const num2 = [...num1]
// num2[2] = 33;
// console.log(num1);
// console.log(num2);

// - Gộp array, object
// const NameAndAge ={ name: "Nguyễn Văn A", age: 19};
// const gpa = {gpa: '3.8'};
// const student = {
//     ...NameAndAge,
//     ...gpa,
// };
// console.log(student);

// const student1 = {name: 'Nguyễn Văn A', age: 19, gpa: '3.9' };
// const student2 = {name: 'Đỗ Thị B', age: 17};
// const student3 = {...student2,...student1, address: 'hà nội'};
// console.log(student3);
//obj sau ghi đè lên obj có key giống phía  trc

// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// const arr3 = [...arr1, 7, 8,...arr2, 4, 5, 6];
// console.log(arr3);
// //arr không bị ghi đè lên nhau


// - Thêm phần tử vào array, thêm key vào object.

//Tính tổng của các số đc truyền vào
//Input 1,2,3
//output 6
//input 1,2,3,4,5
//output 15
// const sum = (...arr)=>{
//     let sumArr = 0;
//     for(let i = 0; i < arr.length; i++){
//         sumArr += arr[i];
//     }
//     return sumArr;
// }
// console.log(sum(1,2,3,4,5));


// Destructuring
// const teacher = {
//     name: 'Trần Thị B',
//     gender: 'girl',
//     age: 30
// };
// // const nameTeacher = teacher.name;
// // const gender = teacher.gender;
// const {gender, name: nameTeacher, age=0 } = teacher;
// console.log(nameTeacher);
// console.log(gender);
// console.log(age);

// const listNumber = [1,2,3];
// const [a, ...b] = listNumber;
// console.log(a);
// console.log(b);

//Array Functions
// Cho 1 mảng A có các phần tử là số
//Viết code  trả về một mảng có giá trị các phần tử trong mảng là A * 2
//cách 1
// const arr = (...A)=>{
//     let newA = [];
//     for(let i = 0; i < A.length; i++){
//         newA.push(A[i]*2);
//     }
//     return newA;
// }
// console.log(arr(1,2,3,4));

//cách 2
// const A = [1,2,3,4,5];
// const newA = A.map((number)=>{
//     return number*2;
// })
// console.log(newA);


// Bài 2: Cho một mảng B, viết code trả về mảng mới chứa các
// phần tử là số lẻ trong mảng B
// Input: B = [1,2,3,4,5]
// Output: newArr = [1,3,5]

// const B = [1,2,3,4,5];
// const newArr = B.filter((number)=>{
//     return number % 2 != 0;
// })

// console.log(newArr);


//Module


