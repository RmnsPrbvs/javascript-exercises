const reverseString = function(str) {
    let zon = []
    for (i in str) {
        console.log(str[i])
        zon.push(str[i])
    }
    zon.reverse()
    mq = ""
    for (i in zon) {
        mq = mq + zon[i]
    }
    return mq
};


// Do not edit below this line
module.exports = reverseString;
