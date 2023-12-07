// 数组去重
function GetPositionKey(e) {
    return e.x + "_" + e.y;
}

function unique(array, getKey) {
    if (typeof Set !== "undefined" && typeof Array.from === "function" && !getKey) {
        return Array.from(new Set(array));
    }

    let added = {};
    let result = [];
    array.forEach(function (item) {
        let key = getKey ? getKey(item) : item;
        if (added[key] !== true) {
            result.push(item);
            added[key] = true;
        }
    });
    return result;
};

const arr = [{ x: 15, y: 14 }, { x: 19, y: 14 }, { x: 14, y: 14 }, { x: 15, y: 14 }, { x: 22, y: 15 }, {x: 15, y:25}];

const value = unique(arr, GetPositionKey);
console.log('value:', value);