// 克隆(数组/对象) recursive 是否递归, true: 递归(深拷贝), false: 不递归(浅拷贝)
function clone(object, recursive) {
    if (object === null) {
        return null;
    }

    if (typeof object !== "object") {
        return object;
    }

    if (typeof cc !== "undefined" && object instanceof cc.Color) {
        return cc.color(object);
    }

    let r;
    if (Array.isArray(object)) {
        r = [];
        for (let i = 0; i < object.length; i++) {
            if (recursive) {
                r.push(clone(object[i], true));
            } else {
                r.push(object[i]);
            }
        }
        return r;
    }

    r = {};
    for (let name in object) {
        if (object[name] && object[name].fnt) {
            r[name] = object[name];
        } else if (recursive) {
                r[name] = clone(object[name], true);
        } else {
            r[name] = object[name];
        }
    }
    return r;
}

const arr = [1, 2, 3, 4];
// const obj = {a: 1, b: 2, c: 3};
const value = clone(arr, true);

console.log('value:', value, 'arr:', arr);