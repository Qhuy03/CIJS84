//bài 1
function daonguoc(str){
    var arraystring = str.split("").reverse().join("");
    return arraystring;
}
console.log(daonguoc("hello"));

//bài 2
function xoa(array){
    const mang = [...(new Set(array))];
    return mang;
   
   }
   const arr = ['Huy', 1, 2, '$', '$', 3, 1];
   console.log(xoa(arr));

//bài 3
function array_AppearTheMost(array){
    array.sort();

    let max =[0,0];
    let count =1;
    for (let i = array.length-1; i > 0; --i){
        if (array[i] == array[i-1]) ++count;
        else{
            if (max[1] < count){
                max[0] = array[i];
                max[1] = count; 
            }
            count = 1;
        }
    }
    console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
}
let arrayList = [ 1, 2, 3, 4, 3, 2, 3, 1, 5, 7, 3, 9, 11, 3];
array_AppearTheMost(arrayList);