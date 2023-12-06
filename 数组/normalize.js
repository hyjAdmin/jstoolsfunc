// 浮点表示法
const arr = [5, 6, 7, 8, 9, 10];
function normalize(arr, ratio) {
    ratio = ratio || 1;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return arr.map(function (value) {
        return value / sum * ratio; 
    });
}

const newArr = normalize(arr, 2);
console.log('newArr:', newArr);