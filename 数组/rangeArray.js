// 返回一个包含最小值和最大值的有序数组
function rangeArray(min, max) {
    let l = [];
    for (let i = min; i <= max; i++) {
        l.push(i);
    }
    return l;
}

const arr = rangeArray(1, 10);
console.log('arr:', arr);