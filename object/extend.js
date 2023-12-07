// 将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。
const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3,
    d: 3
}

const obj3 = {
    e: 5,
    f: 6
}

function extend(...e) {
    if (Object.assign) {
        return Object.assign.apply(this, arguments);
    }
    for (let t = 1; t < arguments.length; t++) {
        for (let n in arguments[t]) {
            e[n] = arguments[t][n];
        }
    }
    return e;
}

const value = extend(obj1, obj2,obj3);
console.log('value:', value); // { a: 1, b: 2, c: 3, d: 3, e: 5, f: 6 }