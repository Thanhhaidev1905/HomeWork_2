let arr = [1, 2, 3, 5, 8, 13, 21];

// lọc các số chẵn
let evenNumber = arr.filter((even) => {
    return (even % 2 === 0);
});
console.log(evenNumber);

// tìm số chia hết cho 5

let div5 = arr.filter((index) => {
    return (index % 5 === 0);
});
console.log(div5);

// Tìm xem trong mãng này có các số lớn hơn 4 hay ko?
let max4 = arr.filter((index) => {
    return index > 4;
})
console.log(max4);
//Tính tổng các số?
let temp = 0;
let sum = arr.reduce((index, temp) => {
    return index + temp;
}, 0);
console.log(sum);