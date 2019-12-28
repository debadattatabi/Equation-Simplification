const {isOperator} = require("./isOperator")
const {OppOperator} = require("./oppOperator")
const {removeEmp}   = require("./removeEmp")

// simplify the expression

const simplifyIt = (rhs, exp) =>{
    let s = []
    exp = exp.split(' ').join(",").replace(/[\s''x()]/g,'').split(",")
    exp = removeEmp(exp)
    let length = exp.length
    if (length > 3) {
        for (let i = 1; i < length; i++) {
            // check if symbol is operator
            if (isOperator(exp[i]) && isOperator(exp[i+1])) {
                s.push(OppOperator(exp[i])+exp[i-1]+")"+OppOperator(exp[i+1]))
                i++
            } else if (isOperator(exp[i])) {
                s.push(OppOperator(exp[i])+exp[i-1])
            } else {
                s.push(exp[i])
            }
        }
        return "("+rhs+s.join('')
    }
    return rhs+exp.slice(0,exp.length-1)
}

module.exports = {simplifyIt}
