const fs = require('fs');

// 加载 txt 格式
const txtFile = "D:\\notes\\txt\\levelMapInfo.txt";
// 导出 txt 格式
const outPutTxt = "D:\\notes\\txt\\levelMapInfo1.txt";

function readTxtFile(fileName) {
    // 读取 txt 文件
    const txtString = fs.readFileSync(fileName, 'utf8');
    return txtString;
}

const txtData = readTxtFile(txtFile);
// 逐行读取转为: string[]
const txtArr = txtData.split(/\r\n|\r|\n/);
let txtArray = [];
for (let i = 0; i < txtArr.length; i++) {
    const infoArr = txtArr[i].split('=');
    /**地图key，用于区别是否是同一类地图（词语长度完全相同） */
    const mapKey = infoArr[0];
    /** 地图难度 */
    const difficulty = infoArr[1];
    /**地图形状(列#行) */
    let mapKeyCount = 0;
    const mapKeyArr = mapKey.split(',');
    for (let j = 0; j < mapKeyArr.length; j++) {
        mapKeyCount += parseInt(mapKeyArr[j],10);
    }
    const size = Math.round(Math.sqrt(mapKeyCount));
    const mapShape = `${size}#${size}`;
    /**词语长度 */
    const mapWordLength = infoArr[2];
    /**地图形状 */
    const mapPath = infoArr[3];
    const info = {
        mapKey: mapKey,
        difficulty: difficulty,
        mapShape: mapShape,
        mapWordLength: mapWordLength,
        mapPath: mapPath
    }
    console.log('info:', info);
    let txtLine = `${mapKey}=${difficulty}=${mapShape}=${mapWordLength}=${mapPath}`;
    txtArray.push(txtLine);
}

fs.writeFile(outPutTxt, txtArray.join('\n') + '\n', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});
