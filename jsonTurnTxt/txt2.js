const fs = require('fs');

// 加载 json 格式
const jsonFile = "D:\\wdGameRes\\data\\lcjh\\zh\\json\\wzrcxLevel.json";
// 导出 txt 格式
// let outPutTxt = "D:\\wdGameRes\\data\\lcjh\\zh\\json\\wzrcxLevel.json";

/** 关卡分组 */
const levelGroup = [100, 200, 300, 2000];

 /**关卡单词 */
let levelWords = [];

dealFielName();

function readJsonFile(fileName) {
    // 读取 JSON 文件
    const jsonString = fs.readFileSync(fileName, 'utf8');
  
    // 将 JSON 解析为 JavaScript 对象
    const jsonObject = JSON.parse(jsonString);
    // 返回包含解析结果的对象
    return jsonObject;
}
  
const jsonData = readJsonFile(jsonFile);

let keys = Object.keys(jsonData);

let txtArr = [];
let txtArray = [];

for(let i = 0; i < keys.length; i++) {
    let data = jsonData[keys[i]];
    // 访问 JSON 对象的属性，获取特定的值
    const id = data.id;
    const size = data.size;
    const words = data.words;
    const items = data.items;
    let lineStr = `${id}=${size}=${words}=${items}`;
    txtArr.push(lineStr);
}

for (let j = 0; j < levelGroup.length; j++) {
    let groupVal = levelGroup[j - 1] ? levelGroup[j - 1] : 0;
    let groupValNext = levelGroup[j];
    // console.log('groupVal:', groupVal, 'groupValNext:', groupValNext);
    txtArray.length = 0;
    // console.log('txtArray1:', txtArray);
    for (let k = 0; k < txtArr.length; k++) {
        if (k >= groupVal && k < groupValNext) {
            const str = removeEmptyLines(txtArr[k]);
            if (str !== '' || str !== null || str !== undefined) {
                txtArray.push(txtArr[k]);
            }
        }
    }
    // console.log('txtArray2:', txtArray);
    let outPutTxt = `D:\\wdGameRes\\data\\lcjh\\zh\\txt\\${levelWords[j]}.txt`;
    fs.writeFile(outPutTxt, txtArray.join('\n') + '\n', (err) => {
        if (err) throw err;
        console.log('File has been saved!');
    });
}

function  dealFielName() {
    // 关卡单词
    for (let j = 0; j < levelGroup.length; j++) {
        let before = levelGroup[j - 1];
        let curr = levelGroup[j];
        let num = before ? before + 1 : 1;
        let str = `lcjhLevels_${num}_${curr}`;
        console.log('str:', str);
        levelWords.push(str);
    }
}

/**
 * @description: 去除空格
 * @param {*} str
 * @return {*}
 */
function removeEmptyLines(str) {
    return str.replace(/\n\s*\r/g, '');
}

