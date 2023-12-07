// 时间(秒)
const INTERVALS = {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
    month: 2592e3
};
// 返回对应的毫秒数:  "30 second" "5 minute" "1 hour" "1 day" "1 week" "1 month"
function parseInterval(intervalStr) {
    let value = parseInt(intervalStr) * 1000;

    for (let name in INTERVALS) {
        if (intervalStr.indexOf(name) !== -1) {
            let period = INTERVALS[name];
            return value * period;
        }
    }
    return value;
}

function padStart(str) {
    let timeStr = str.length < 2 ? '0' + str : str;
    return timeStr;
}

function formattingTime(distance) {
        // 计算剩余的小时、分钟和秒数
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 将计算出的时间格式化为字符串，并更新倒计时元素
        const formattedTime = `${padStart(hours.toString())}:${padStart(minutes.toString())}:${padStart(seconds.toString())}`;
        return formattedTime;
}

const endTime = Date.now() + parseInterval('10 minute');

function showTimer(endTime) {
    const now  =  Date.now()
    const distance = endTime - now;
    // 将计算出的时间格式化为字符串，并更新倒计时元素
    const formattedTime = formattingTime(distance);
    console.log('formattedTime:', formattedTime);
}

showTimer(endTime);
