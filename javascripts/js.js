document.addEventListener("DOMContentLoaded", function(){


alert('Привет!');

let str = 'abcde';
alert(str)

str = str + '!!!';

alert(str);

alert(str[0]); 

alert(str[1]); 

alert(str[4]);



let a = parseInt(prompt("Введите первое число: -1"));
let b = parseInt(prompt("Введите первое число: 5"));
console.log(a > 0 || b > 0); 


let age = parseInt(prompt("Введите ваш возраст:"));
if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}



});

