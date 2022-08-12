


let makeNegative = num => (num <= 0) ? num : -num;

console.log(makeNegative(+prompt('Count', '1')));


// SECOND SOLUTION

function makeNegative(num) {
    return -Math.abs(num);
}