//Bài 1: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0].
// Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )

const arr1 = [1,2,4,5,6];
const arr2 = [1, 6, 8, 9, 0];

const array = [...arr1, ...arr2];
const Arr = array.filter((item, index) => array.indexOf(item) !== index);
console.log(Arr);


//Bài 2: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
const arr = [1,54,6,7];
const newArr = arr.map((item)=>{
    return item + 5;
})
console.log(newArr);

//Bài 3: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96].
// Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.

const m = [1,2,4,5,6,7];
const n = [3,5,675,8,96];
const valuesToRemove = [1, 8, 10, 96, 7];
const mn = [...m, ...n];

const newMN = mn.filter(item => !valuesToRemove.includes(item));

console.log(newMN);


//Bài 4: Cho array 1 như sau:

const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },      
    { id: 13, name: 'Young', age: 35 },        
    { id: 14, name: 'Mane', age: 21 },          
    { id: 15, name: 'Salah', age: 24 },
];

//Hãy chuyển đổi nó về array có dạng sau:
// playersModified = 
// 							{ 
// 								11: {id: 11, name: "Messi", age: 33},
// 								12: {id: 12, name: "Ronaldo", age: 34},
// 								13: {id: 13, name: "Young", age: 35},
// 								14: {id: 14, name: "Mane", age: 21},
// 								15: {id: 15, name: "Salah", age: 24}
// 							};


