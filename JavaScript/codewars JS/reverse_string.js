

//FIRST SOLUTION

function solution(str) {
    return str.split('').reverse().join('');
}

// SIMPLE SOLUTION OF FIRST
let solution = str => str.split('').reverse().join('');

console.log(solution('Hello'));


// SECOND SOLUTION

function solution(s){
    let o = '';
    for (let i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
}

