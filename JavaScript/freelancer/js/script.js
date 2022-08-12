// console.log('Учу JS')

// const COLOR_EYES = 'blue';

// let user, username;

// username = 'Вася';

// user = username;

// console.log(user)

// console.log('558' > 22++);


// let count = 1

// for (; count < 6; count++) {
//     console.log(count);
// }




// let num = 8;

// while(num) {
//     console.log(num);
//     num--;
// }



// for (let num = 0; num < 3; num++) {
//     console.log(`Число: ${num}`)
// }


// let num = 0;

// while (num < 3) {
//     console.log(`Число: ${num}`);
//     num++;  
// }



// endFor:
// for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 2) break endFor;
//         console.log(size);
//     }
// }




// let browser = prompt('What is the browser?', '');

// if (browser == 'Edge') {
//     alert('You`ve got the Edge');
// }

// else if (browser == 'Chrome' || browser == 'Opera' || browser == 'Safari' || browser == 'Firefox') {
//     alert('Okay, we support this browsers!');
// }

// else  alert( 'We hope that this page looks ok!' );



// const number = +prompt('What is the number?', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели 0');
//         break;
    
//     case 1:
//         alert('Вы ввели 1');
//         break;

//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }



// function checkAge(age) {
//     return (age > 18) ? alert(true) : confirm('Родители разрешили?');
// }

// checkAge(+prompt('Введи возраст', ''))


// function checkAge(age) {
//     return (age > 18) || confirm('How are you, baby?');
// }

// alert(checkAge(+prompt('How old are you?', '')))



// function min(a, b) {
//     return (a < b) ? a : b;
// }

// alert(min(9, 5));



// function pow(x, n) {
//     if (x > 1 && n > 1) {
//         return `${x} возведенное в ${n} = ${x ** n}`;
//     } else {
//         return 'X и N должны быть больше 1';
//     }
// }

// alert(pow(+prompt('Введите x', ''), +prompt('Введите n', '')));



// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );



// let str = new String('Привет');   //Срабатывает только потому, что new String делает из примитивного типа данных - объект
// str.test = 'Хай';
// alert(str.test)




// let value1 = +prompt('First number', '');
// let value2 = +prompt('Second number', '');

// alert(value1+value2)


// let readNumber = n => {

//   while(true) {
//     let num = +prompt('Введите число')
//     if (num == n) {
//       return num
//     }
//     else alert('Вы не угадали :(');
//     let conf = confirm('Вы уверены, что хотите продолжить?');
//     if (conf == false) {
//       break;
//     }
//   } 
// }

// if (typeof readNumber(35) == 'undefined') alert('Зря ты отказался');
// else alert(`Вы угадали, правильное число было ${readNumber(35)}`);




// let numOne = Math.round((1.005 + Number.EPSILON)*100) / 100;
// console.log(numOne);


// let value = '145.58px';
// console.log(parseFloat(value));


// let value = '58f';
// if (isNaN(value)) {
//   console.log('Результат выражения NaN!');
// }


// console.log(Math.max(10, 58, 39, -150, 0));

// console.log(Math.floor(58.858));


// let ucFirst = str => str[0].toUpperCase() + str.slice(1);


// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }


// console.log(ucFirst('привет'));



// function checkSpam(str) {
//     return (str.toLowerCase().includes('viagra') || str.includes('xxx')) ? true : false;
// }

// let checkSpam = str => (str.toLowerCase().includes('viagra') || str.includes('xxx')) ? true : false;

// console.log(checkSpam('buy ViAgR xxxxXXXX'));



// function truncate(str, max_length) {
//     if (str.length > max_length) return str.substr(0, max_length)+'...';
//     else return str;
// }

// console.log(truncate("Вот, что ", 20));



// function extractCurrencyValue (str) {
//     return +(str.slice(1));
// }

// console.log(extractCurrencyValue('$120'));


// console.log('фрилансер'.includes('лан', 4));




// let styles = ['Джаз', 'Блюз'];
// console.log(styles);
// styles.push('Рок-н-рол');
// console.log(styles);
// styles[Math.floor((styles.length-1)/2)] = 'Классика';
// console.log(styles)
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);



// let array = [1, 2, 3];
// console.log(array.reduce(function (a, b) {
//     return a+b;
// }, 0))



// function sumInput() {
//     array = []
//     while (true) {
//         num = prompt('Введите число', '');
//         if (isFinite(num) && num != null) array.push(+num);
//         else break;
//     }
//     return array.reduce(function (a, b) {return a+b;}, 0);
// }

// console.log(sumInput());



// function getMaxSubSum(array) {
//     partialSum = 0;
//     maxSum = 0;

//     for (let item of array) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }

//     return maxSum;
// }


// console.log(getMaxSubSum([-1, 2, 3, -9, 1]));




// let array  = [1,2,3,54,56];

// array.splice(1, 2);
// console.log(array);



// let arr = [1, 2];

// let arrayLike = {
//   0: "что-то",
//   length: 1,
//   [Symbol.isConcatSpreadable] : true,  // Делает так, чтобы можно было добавить объект как массив в другой массив
// };

// alert( arr.concat(arrayLike) );



// let array = [1, 2, 3, 4, 5];

// let result = array.reduce((sum, current) => sum*current);
// console.log(result);



// let string = '-webkit-transition';
// let array = string.split('-');
// let result = array.map((item) => (item.length > 1) ? item[0].toUpperCase() + item.slice(1) : item);
// console.log(result.join(''));



// let array = [1, 5, 8, 3];

// function filterRange(array, a, b) {
//     return array.filter(item => (item >= a && item <= b));
// }

// console.log(filterRange(array, 1, 4));




// let array = [1, 5, 2, 4, 556, 32];


// function filterRangeInPlace(array, a, b) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < a || array[i] > b) {
//             array.splice(i, 1);
//             i--;
//         } 
//     }
// }

// filterRangeInPlace(array, 1, 4);
// console.log(array);



// let array = [5, 2, 1, -10, 8];

// function reverseSort(a, b) {
//     if (a > b) return -1;
//     if (a == b) return 0;
//     if(a < b) return 1;
// }

// array.sort(reverseSort);
// console.log(array);



// let array = ['HTML', 'CSS', 'JAVASCRIPT'];

// function copySorted(array) {
//     let result = array.slice();  //Копирование массива в другой, без ссылания на него
//     return result.sort();
// }

// let res = copySorted(array);

// console.log(res);
// console.log(array);


// class Calculator {

//     calculate(string) {
//         let operation = string.split(' ')[1];
//         if (operation == '+') return +(string.split(' ')[0]) + +(string.split(' ')[2]);
//         else if (operation == '-') return +(string.split(' ')[0]) - +(string.split(' ')[2]);
//         return operation;
//     }
// }

// let calc = new Calculator;
// console.log(calc.calculate('3 * 7'));



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);
// console.log(names);



// let object = {};

// object.surname = 'Cheremisin';
// console.log(object);







// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// function mapping(users) {
//     let ob = {};
//     ob.fullname = `${users.name} ${users.surname}`;
//     ob.id = users.id;
//     return ob; 
// }


// // SECOND VARIANT

// // let usersMapped = users.map(user => ({
// //     fullName: `${user.name} ${user.surname}`,
// //     id: user.id
// // }));

// let usersMapped = users.map(mapping); 
// console.log(usersMapped);






// FIRST SOLUTION

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let array = [ vasya, petya, masha ];

// function sortByAge(array) {
//     let res = [];
//     let result = [];
//     for (let i of array) {
//         res.push(i.age);
//     }
//     for (let i of res.sort()) {
//         for (let j of array) {
//             if (j.age == i) {
//                 result.push({name : j.name, age: j.age});
//             }
//         }
//     }
//     return result;
// }

// array = sortByAge(array);
// console.log(array[1].name);



// SECOND SOLUTION

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let array = [ vasya, petya, masha ];

// function sortByAge(array) {
//     array.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// sortByAge(array);
// console.log(array[0].name);





// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let array = [ vasya, petya, masha ];


// // FIRST SOLUTION
// function getAverageAge(array) {
//     return array.map((item) => item.age).reduce((a, b) => a+b) / array.length;
// }


// // SECOND SOLUTION
// // function getAverageAge(users) {
// //     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// // }

// console.log(getAverageAge(array));





// function unique(arr) {
//     res = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (res.includes(arr[i])) {
//             arr.splice(i, 1);
//             i--;
//         }
//         else res.push(arr[i]);
//     }
//     return arr
// }



// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O", 'a', 'a'
// ];


// console.log(unique(strings));




// let array = [1, 2, 3, 4];

// const sumer = (array) => {
//     let result = 0;
//     for (let number of array) {
//         result += number;
//         console.log(result);
//     }
// }

// sumer(array);



// let letterFrequency = (text) => {
//     text = text.split(' ');
//     let result = {};
//     for (const word of text) {
//         for (const letter of word) {
//             if (!(letter in result)) {
//                 result[letter] = 1;
//             }
//             else result[letter] += 1;
//         }
//     }

//     return result; 
// }

// console.log(letterFrequency('lol haha kek'));




// CODEWARS 1 - SQUEARE EVERY DIGIT


// function squareDigit(num) {
//     result = [];
//     numbers = String(num).split('');
//     for (let number of numbers) {
//         result.push(String(Number(number)**2));
//     }
//     return result.join('');
// }

// console.log(squareDigit(3121));


// SECOND SOLUTION CODEWARS 1
// function squareDigit(num) {
//     return Number(String(num).split('').map(function (val) {return val  ** 2}).join(''));
// }

// console.log(squareDigit(3121))




// CODEWARS 2 - HIGH AND LOW 

// function hightAndLow (num) {
//     number = num.split(' ');
//     return `${number.find(n => n == Math.max(...number))} ${number.find(n => n == Math.min(...number))}`;
// }

// console.log(hightAndLow('1 2 -3 4 5'));





// CODEWARS 3 - DESCENDING ORDER 

// function descendingOrder(n) {
//     return +String(n).split('').sort(function (a, b) { return  b-a}).join('');
// }

// console.log(descendingOrder(123456789))


// SECOND SOLUTION CODEWARS 3 - DESCENNDING NUMBER (MORE READIBLE)

// function descendingOrder(n) {
//     array = String(n).split('');
//     array.sort((a, b) => b - a);
//     return +array.join('');
// }

// console.log(descendingOrder(123456789))




// CODEWARS 4 - THIS IS PROBLEM

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.name = this.firstName + ' ' + this.lastName;
// }

// n = new NameMe('John', 'Parker')
// console.log(n.name)





// CODEWARS 5 - MUMBLING


// function accum(s) {
//     let result = [];
//     for (let i = 0; i < s.length; i++) {
//         result.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
//     }
//     return result.join('-');
// }
// console.log(accum('abcD'))



// SECOND SOLUTION CODEWARS 5 - MUMBLING

// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

// console.log(accum('abcD'));





// CODEWARS 6 - GET THE MIDDLE CHARACTER  

// function getMiddle(s) {
//     if (s.length % 2 == 0) return s.slice(Math.floor(s.length/2)-1, Math.ceil(s.length/2) + 1);
//     else return s.slice(Math.ceil(s.length/2)-1, s.length/2 + 1);
// }

// console.log(getMiddle('testing'));



// SECOND SOLUTION CODEWARS 6 - GET THE MIDDLE CHARACTER

// function getMiddle(s) {
//     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }






// CODEWARS 7 - YOU ARE SQUARE 

// function isSquare(n) {
//     return Number.isInteger(n ** (1/2));
// }

// console.log(isSquare(-1))






// CODEWARS 8 - MULTIPLE 3 OR 5

// function solution(number) {
//     let result = 0;
//     for (let i = 1; i < number; i++) result += (i % 3 === 0 || i % 5 === 0) ? i : 0;
//     return result;
// }

// console.log(solution(11))








// CODEWARS 9 - STOP REVERSE

// function spinWords(string) {
//     let result = []; 
//     for (let word of string.split(' ')) {
//         if (word.length >= 5) {
//             result.push(word.split('').reverse().join(''));
//         }
//         else result.push(word);
//     }

//     return result.join(' ');
// }

// console.log(spinWords('Hey fellow warriors'))



// SECOND SOLUTION CODEWARS 9 - STOP REVERSE 

// function spinWords(string) {
//     return words.split(' ').map(function (word) {
//         return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
// }

// console.log(spinWords('Hey fellow warriors'))



// const filter = (numbers, greaterThan) => {
//     return numbers.filter(value => value > greaterThan);

// }

// console.log(filter([1, 2, 3, 4, 5, 6], 5))






// CODEWARS 10 - FIND THE ODD INT

// function findOdd(array) {
//     let numbers = {};
//     array.map(item => (!(item in numbers)) ? numbers[item] = 1 : numbers[item] += 1);

//     // // for (let element of array) {
//     // //     if (!(element in numbers)) numbers[element] = 1;
//     // //     else numbers[element] += 1;
//     // // }

//     // // return Object.entries(numbers).map(item => item[1] % 2 != 0 ? item[0] : null);
//     for (let item in numbers) {
//         if (numbers[item] % 2 != 0) return +item;
//     }
// }

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))







// CODEWARS 11 - SUM OF DIGITS

// function digitalRoot(n) {
//     array = String(n).split('').map(item => +item);
//     let sum = array.reduce((a, b) => a + b);
//     do {
//         sum = String(sum).split('').map(item => +item);
//         sum = sum.reduce((prev, next) => prev + next);
//     } while (sum > 9);
//     return sum;
// }

// console.log(digitalRoot(493193))



// SECOND SOLUTION CODEWARS 11 - SUM OF DIGITS

function digital_root(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}







// CODEWARS 12 - ARRAY DIFF

// function arrayDiff(array, diff_array) {
//     let new_array = array.map(number => String(number)).join('');
//     for (let num of diff_array) {
//         new_array = new_array.replaceAll(String(num), '');
//     }
//     return new_array.split('').map(number => +number);
// }

// console.log(arrayDiff([1,2,2,2,3],[2]))





// CODEWARS 13 - WHO LIKES IT?


// function likes(names) {
//     if (names.length == 1) return `${names[0]} likes this`;
//     else if (names.length == 2) return `${names[0]} and ${names[1]} like this`;
//     else if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     else if (names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     else return []
// }

// console.log(likes([]))





// CODEWARS 14 - COUNTING BINARY


// function countBits(number) {
//     let result = 0;
//     for (let digit of String(number.toString(2)).split('')) {
//         result += (digit == '1') ? 1 : 0;
//     }

//     return result;
// }

// console.log(countBits(1234))



// SECOND SOLUTION CODEWARS 14 - COUNTING BINARY 


// let countBits = n => n.toString(2).split('0').join('').length;

// console.log(countBits(1234))



// CODEWARS 15 - CREATE PHONE NUMBER


// function createPhoneNumber(numbers) {
//     return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
// }


// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))





// CODEWARS 16 - FINDOUTLIER 


// function findOutlier(integers) {
//     whatIsTheNumber = (integers[0] % 2 == 0 && integers[1] % 2 == 0  || integers[0] % 2 == 0 && integers[2] % 2 == 0 || integers[1] % 2 == 0 && integers[2] % 2 == 0) ? 'even' : 'odd';
//     if (whatIsTheNumber == 'even') {
//         for (let number of integers) {
//             if (number % 2 != 0) return number
//         }
//     }
//     else {
//         for (let number of integers) {
//             if (number % 2 == 0) return number
//         }
//     }
// }

// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))



// SECOND SOLUTION CODEWARS 16 - FINDOUTLIER

// function findOutlier (integers) {
//     let even = integers.filter(number => number % 2 == 0);
//     let odd = integers.filter(number => number % 2 != 0);
//     return (even.length == 1) ? even[0] : odd[0];
// }

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))






// CODEWARS 17 - DUPLICATE COUNTING


// function duplicateCount(text) {
//     let result = {};
//     for (let letter of text.toLowerCase()) {
//         if (!(letter in result)) result[letter] = 1;
//         else result[letter] += 1;
//     }

//     return Object.values(result).filter(number => number > 1).length;
// }

// console.log(duplicateCount('aabBcde'))




// SECOND SOLUTION CODEWARS 17 - DUPLICATE COUNTING

// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
// }






// CODEWARS 18 - DUPLICATE ENCODER 


// function duplicateEncoder(word) {
//     let counter = {};
//     let result = '';
//     for (let letter of word.toLowerCase()) {
//         if (!(letter in counter)) counter[letter] = 1;
//         else counter[letter] += 1;
//     }

//     for (let letter of word.toLowerCase()) {
//         if (counter[letter] > 1) result += ')';
//         else result += '(';
//     }

//     return result
// }

// console.log(duplicateEncoder('Success'))





// SECOND SOLUTION CODEWARS 18 - DUPLICATE ENCODER 


// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
// }

// console.log(duplicateEncode('Success'))








// CODEWARS 19 - IS VALID WALK


// function isValidWalk(walk) {
//     let directions = {
//         'n' : 0,
//         'w' : 0,
//         's' : 0,
//         'e' : 0
//     }

//     walk.map(item => directions[item] += 1);
//     if (walk.length == 10 && directions['s'] == directions['n'] && directions['w'] == directions['e']) return true
//     else return false
// }

// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))






// CODEWARS 20 - PERSISTENT BURGER 


// function persistence(num) {
//     number_array = String(num).split('').map(number => +number);
//     count = 0;
//     let product = number_array.reduce((prev, next) => prev * next);
//     while (product > 9) {
//         count += 1;
//         product = String(product).split('').map(number => +number).reduce((prev, next) => prev * next);
//     }

//     return (num > 10) ? count+1 : count;

// }

// console.log(persistence(4))





// SECOND SOOLUTION CODEWARS 20 - PERSISTENCE BURGER


// function persistence(num) {
//     times = 0;

//     num = num.toString();
//     while (num.length > 1) {
//         times++;
//         num = num.split('').map(Number).reduce((a, b) => a*b).toString();
//     }

//     return times;

// }

// console.log(persistence(999))







// CODEWARS 21 - MOVING ZEROES TO THE END


// function moveZeroes(arr) {
//     let count = 0;
//     arr.forEach(element => (element === 0) ? count++ : count += 0);
//     arr = arr.filter(number => number !== 0);
//     return arr.concat('0'.repeat(count).split('').map(Number));
// }

// console.log(moveZeroes([1,2,0,1,0,1,0,3,0,1]))





// SECOND SOLUTION CODEWARS 21 - MOVING ZEROES TO THE END


// function moveZeroes(arr) {
//     return arr.filter(item => item !== 0).concat(arr.filter(item => item === 0));
// }

// console.log(moveZeroes([1,2,0,1,0,1,0,3,0,1]))






// CODEWARS 22 - SIMPLE PIG 


function pigIt(str) {
    str = str.split(' ');
    let result = [];
    for (let word of str) {
        if (word.length > 2) result.push(`${word[word.length - 1]}${word.slice(1,-1)}${word[0]}ay`)
        else if (word.length == 2) result.push(`${word[word.length - 1]}${word[0]}ay`)
        else result.push(word)
    }
    
    return result.join(' ');
}


console.log(pigIt('This is my string'))






























































































