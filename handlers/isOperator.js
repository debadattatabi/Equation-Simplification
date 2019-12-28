// checks if the input is an operator or not
const isOperator = (x) => {
  switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
    case '=':
      return true
  }
  return false
}

module.exports = {isOperator}
