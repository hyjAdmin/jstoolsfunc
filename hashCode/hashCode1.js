function hashCode(str) {
    if (str === undefined || str === null || typeof str === "number" && isNaN(str)) {
        return 0;
    }

    str += "";

    let hashCode = 0;

    for (let i = 0; i < str.length; i++) {
        // eslint-disable-next-line no-bitwise
        hashCode = ((hashCode << 5) - hashCode) + str.charCodeAt(i);
    }

    return hashCode;
}

const value = hashCode('bcd');
console.log('value:', value);