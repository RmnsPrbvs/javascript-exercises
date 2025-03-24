const sumAll = function(a, b) {

    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a < 0 || b < 0) {return "ERROR"}
        if (a > b) {
            let c = a
            a = b
            b = c
        }
    
    let m = 0
    for (i = a; i < b; i++) {
        m = m + i
    }
    return m + b 
    } else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
