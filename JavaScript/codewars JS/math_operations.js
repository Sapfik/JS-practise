

let basicOp = function(operation, value1, value2) {
    if (operation == '+') return value1 + value2;
    else if (operation == '-') return value1 - value2;
    else if (operation == '*') return value1 * value2;
    else if (operation == '/') return value1 / value2;

}

console.log(basicOp('-', 15, 18));


SECOND SOLUTION

function basicOp(o, a, b) {
    return eval(a+o+b);
}

// TRIRD SOLUTION

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 - value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

console.log(basicOp('-', 16, 132));