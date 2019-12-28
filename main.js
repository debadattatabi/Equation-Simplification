const fs = require('fs')
const obj = JSON.parse(fs.readFileSync('sample.json', 'utf8'))

const { eachRecursive } = require("./handlers/eachRecursive")
const { preToInfix }    = require("./handlers/preToInfix")
const { simplifyIt }    = require("./handlers/simplify")



//driver
let arr = eachRecursive(obj)
let expression = preToInfix(arr)
console.log(expression)
let lhs = expression.split('=')[0]
let rhs = expression.split('=')[1].trim()
let value = simplifyIt(rhs, lhs)
console.log("x = "+value)
console.log("x = ",eval(value))
