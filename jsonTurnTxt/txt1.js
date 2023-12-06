const fs = require('fs');

// 加载 json 格式
const jsonFile = "D:\\notes\\txt\\Levels_101.json";
// 导出 txt 格式
const outPutTxt = "D:\\notes\\txt\\Levels_101.txt";

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

for(let i = 0; i < keys.length; i++) {
    let data = jsonData[keys[i]];
    // 访问 JSON 对象的属性，获取特定的值
    const id = data.id;
    const ping = data.ping;
    let lineStr = `${id}=${ping}`;
    txtArr.push(lineStr);
}

fs.writeFile(outPutTxt, txtArr.join('\n') + '\n', (err) => {
        if (err) throw err;
        console.log('File has been saved!');
});