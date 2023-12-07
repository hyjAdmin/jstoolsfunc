const callback = () => {
    console.log('123');
}

function once(func) {
    return function () {
        if (func) {
            let oldFunc = func;
            func = undefined;
            return oldFunc.apply(this, arguments);
        }
    };
};

once(() => {
    console.log(123);
});

