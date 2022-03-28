// // function đảo ngược của 1 arr
// let arr = prompt("Nhập chuỗi bất kì");
// let new_arr = [...arr];
// const reverseStr = () => {
//     return new_arr.reverse().join("");
// };
// console.log(arr); //>[ 1, 2, 3, 4, 5 ]
// console.log(new_arr); //>[ 5, 4, 3, 2, 1 ]
// console.log(reverseStr()); //

//function xóa phần tử trùng lặp
let arr2 = [1, 3, 2, 1, 3, 2, 4];
let new_arr2 = [];

new_arr2 = arr2.filter((index) => {
    return new_arr2.includes(index) ? "" : new_arr2.push(index);
});
console.log(arr2);
console.log(new_arr2);

// function tim phan tu xuat hien nhieu nhat va tan suat xuat hien
let arr3 = [1, 2, 3, 1, 4, 5, 1, 1, 4, 6, 7, 1];