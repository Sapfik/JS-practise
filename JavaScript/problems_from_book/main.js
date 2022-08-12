"use strict";

// let, const



// let age = prompt('How old are you?', 100);  // prompt - по сути дела input в Python, только работает в браузере
// alert(`You are ${age}`);

// let isBoss = confirm('Are you boss here?')  //confirm - если мы нажимаем кнопку ОК, то будет true, если ОТМЕНА, то false
// alert(isBoss)


// let name = prompt('What is your name?', ' ');
// alert(`Your name is ${name}`)


// let age = prompt('How old are you?', '');
// let message = (age < 3) ? 'Hi, child!' :
//             (age < 18) ? 'Hi, man' :
//             (age < 100) ? 'You are so old!' :
//             'You are cool';

// alert(message)




// let whatIsTheStandart = prompt('What is the official name of JS?', '');
// let message = (whatIsTheStandart == 'ECMAScript') ? 'Right' : 'No, official name is ECMAScript';

// alert(message)




// let message = 'a';
// if (message >= 1) {
//     alert(true);
// } else {
//     alert(false);
// }


// let data = prompt('What is your secret number?', '');

// alert((data == 1 || data == 0 || data == -1 ? +data : 'That is not secret word!'))


// let a = 1;
// let b = 131233;

// let result = (a+b<=4) ? 'Мало' : 'Много';
// alert(result);



// let login = prompt('What is your login?' , '');

// let message = (login == 'Сотрудник') ? 'Hi' : 
//             (login == 'Директор') ? 'Welcome to the our gay club' :
//             (login == '') ? 'You are not loginned' :
//             'Who are you?'

// alert(message)


// let age = prompt('How old are you?', '');
// if (!(age >= 14 && age <= 90)) {
//     alert('YES');
// }


// let who = prompt('Who are you?', '');

// if (who == 'Админ') {
//     let pass = prompt('What is your pass?', '');
//     if (pass == 'Я главный') alert('Здравствуйте');
//     else alert('Неверный пароль!');
// } 
// else if (who == null || who == '') {
//     alert('Отмена')
// }

// else alert('I dont know who are you!')




// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 5; i++) alert( i );



// let i = 0;

// while (i < 3) {
//     alert(`number ${i}`);
//     i++;
// }

// let number = 0

// while (true) {
//     number = +prompt('Введите число: ', '');
//     if (number > 100 || number == '') break;

// }

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// alert('ВЫ наконец-то смогли выбраться из этой петли времени')



// let num = 10;

// nextPrime : 
// for (let i = 2; i <= num; i++) {
    
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//     }

//     alert(i);

// }




// let boolean = true;
// let nulle = null;
// let earth;
// let currentUser;

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// let name = 'Илья';
// let bigint =  432534654756856785634553534n // Чтобы указать на то, что число должно быть не ограниченым, мы ставим n в конец числа

// alert(`Hello ${name}`)  // ``  - чтобы встраивать какие-то значение в строку
//                         // ${} - если мы поставили ``, мы должны нашу переменную обернуть в это
// // Однострочный комментарий

/**
 * Многострочный 
 * комментарий
 */





// let calculator = {
//     value1: 100,
//     value2 : 200,
//     sum () {
//         return this.value1 + this.value2;
//     },
//     mul () {
//         return this.value1 * this.value2;
//     }
// }

// console.log(calculator.sum());
// console.log(calculator.mul());



// function Calculator() {
//     this.read = function() {
//         this.num1 = +prompt('Input the first number: ', '');
//         this.num2 = +prompt('Input the second number: ', '')
//     }

//     this.sum = function() {
//         return this.num1 + this.num2;
//     }

//     this.mul = function() {
//         return this.num1 * this.num2; 
//     }
// }


// let user = new Calculator();

// user.read();

// alert(user.sum());
// alert(user.mul());




function Accumulator(stringValue) {
    this.value = stringValue;

    this.read = function() {
        this.value += +prompt('Give me the number please', '');
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
accumulator.read();

alert(accumulator.value);
















































