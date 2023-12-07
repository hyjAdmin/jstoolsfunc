// 数组深拷贝

// 1、使用JSON.parse()和JSON.stringify()
const arr1 = [1, 2, 3, 4];
const arr2 = JSON.parse(JSON.stringify(arr1));
// console.log('arr2:', arr2);

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

const arr11 = [4, 5, { a: 6 }];
const arr12 = clone(arr11, true);
arr12[2].a = 4;
console.log('arr11:', arr11);

// 数组浅拷贝

// 1、Array.prototype.slice()
const arr3 = [1, 2, { a: 3 }];
const arr4 = arr3.slice();
arr4[2].a = 4;
// console.log('arr3:', arr3);

// 2、Array.from()
const arr5 = [4, 5, { a: 6 }];
const arr6 = Array.from(arr5);
arr6[2].a = 4;
// console.log('arr5:', arr5);

// 3、使用扩展运算符: ...
const arr7 = [4, 5, { a: 6 }];
const arr8 = [...arr7];
arr8[2].a = 4;
// console.log('arr7:', arr7);

// 使用 Array.map():
const arr9 = [4, 5, { a: 6 }];
const arr10 = arr9.map(item => item);
arr10[2].a = 4;
// console.log('arr10:', arr10);

