// 值是否是一个数组
const arr = [2, 3, 4];
function toArray(array) {
    return Array.isArray(array) || array === undefined || array === null ? array : [array];
};

const value = toArray(arr);
console.log('value:', value); // [ 2, 3, 4 ]