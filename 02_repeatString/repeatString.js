const repeatString = function(str, num) {
    if (num < 0) {
    return "ERROR"
    } else {
    let st = ""
    for (i = 0; i < num; i++) {
        st = st + str
    }
    return st
}
};

// Do not edit below this line
module.exports = repeatString;
