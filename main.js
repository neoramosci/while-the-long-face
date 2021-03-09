function numberDoubler(num) {
    // Your code here
    let outputNum = num;
    while (output < num 100) {
        outputNum = outputNum * 2;
    }
    return outputNum;
}

function stringRepeater(str) {
    // Your code here
    let outputStr = str;
    while (outputStr.length < 10) {
        outputStr += str;
    }
    return outputStr;
}

function makeDivisible(x, y) {
    // Your code here
    let outputX = x;
    while (outputX % y !== 0) {
        return outputX;
    }
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};