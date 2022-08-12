

// function summation(number) {
//     let count = 0;
//     for(let i = 1; i <= number; i++) {
//         count += i;
//     }
//     return count;
// }

// console.log(summation(8));




function getCount (str) {
    let count = 0;
    let array = str.split('');
    array.forEach(function(item) {
        if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u') count += 1;
    });
    return count
}

console.log(getCount('abracadabra'));


























