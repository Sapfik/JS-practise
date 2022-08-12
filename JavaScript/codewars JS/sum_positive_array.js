

function sum_positive(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) result += array[i];
    }
    return result;
}

console.log(sum_positive([-1,2,3,4,-5]));


// SECOND SOLUTION

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}