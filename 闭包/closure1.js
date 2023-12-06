const arr = [1, 2, 3, 4];
function wait(n, callback) {
    if (n === 0) {
        callback();
        return;
    }
    let total = 0;
    return function () {
        total++;
        if (total === n) {
            callback();
        }
    }
}

let nextStep = () => {
    console.log('wait carry out!')
}

let waitFunc = wait(arr.length, nextStep);
for (let i = 0; i < arr.length; i++) {
    console.log('i:', i);
    waitFunc();
}
