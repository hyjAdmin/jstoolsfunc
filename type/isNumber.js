// 是否是数字类型(只包含数字, 返回值 是: true, 否: false)
function isNumber(value) {
    return typeof value === "string" && value && /^[0-9]+$/.test(value) || typeof value === "number" && !isNaN(value);
}

const value = isNumber('1243');
console.log('value:', value);  // true