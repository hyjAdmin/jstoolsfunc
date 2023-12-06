// 随机数 [0,1)
for (let i = 0; i < 10; i++) {
    const randomVal = Math.random();
    // console.log('randomVal:', randomVal);
}

// 得到一个两个数之间的随机整数: [min: 最小值, max: 最大值]
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
for (let i = 0; i < 10; i++) {
    const val = getRandomIntInclusive(1, 10);
    // console.log('val:', val);
}

// 得到一个两个数之间的随机整数: [min: 最小值, max: 最大值)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 10; i++) {
    const val = getRandomInt(1, 10);
    // console.log('val:', val);
}

// 得到一个两个数之间的随机整数: (min: 最小值, max: 最大值]
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + (min + 1);
}

for (let i = 0; i < 10; i++) {
    const val = getRandomArbitrary(1, 10);
    console.log('val:', val);
}