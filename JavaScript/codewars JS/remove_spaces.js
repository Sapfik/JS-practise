
// FIRST SOLUTION
function remove_spaces(str) {
    return str.split(' ').join('');
}


// SECOND SOLUTION

function remove_spaces(x){
    return x.replace(/ /g,'');
}

console.log(remove_spaces('8 j 8   mBliB8g  imjB8B8  jl  B'))