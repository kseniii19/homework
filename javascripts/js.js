document.addEventListener("DOMContentLoaded", function(){

/*

alert('Привет!');

let str = 'abcde';
alert(str)

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

*/

let age1 = parseInt(prompt("Введите ваш возраст:"));
if (age1 >= 65) {
    alert("Поздравляем с пенсионным возрастом!")
} 
else {
     alert("Вам еще рано на пенсию")
}





let n1 = parseInt(prompt("Введите первое число"));
let n2 = parseInt(prompt("Введите второе число "));
if (n1 > n2){
    alert ("Первое число больше");
}
if (n2 > n1){
    alert ("Второе число больше");
}
if (n1 === n2){
    alert ("Числа равны")
}






let f = parseInt(prompt("Введите число"));
if ((f % 2) == 0){
    alert ("Это четное число");
}
if ((f % 2) !== 0){
    alert ("Это нечетное число");
}




let secret = 7;
let guess = prompt("Угадайте число от 1 до 10:");

if (guess == secret) {
    alert ("Вы угадали!");
} else {
    alert ("Попробуйте ещё раз!");
}





let login = prompt("Введите логин");
let parol = prompt ('Введите пароль');

if (login == "admin" && parol == "12345"){
    alert ("Добро пожаловать!")
}
else {
    alert ("Попробуйте снова!")
}



let year = parseInt(prompt("Введите год"));
if ((year % 4) == 0){
    alert ("Это високосный год");
}
if ((year % 4) !== 0){
    alert ("Это не високосный год");
}



let chislo = parseInt (prompt ("Введите число"));
if (chislo > 100){
    alert ("Большое число!")
}
if (chislo < 100){
    alert ("Маленькое число!")
}
if ( chislo == 100){
    alert ("Точно 100!")
}








let box = document.querySelectorAll('.click');
let isBlue = true;

box.forEach(function(click) {
    click.addEventListener('click', function() {
        if (isBlue) {
            this.style.backgroundColor = 'red';
            this.style.margin = '2vw';
            isBlue = false;
        } else {
            this.style.backgroundColor = 'lightsteelblue';
            this.style.margin = '1vw';
            isBlue = true;
        }
        console.log('Стили изменены!');
    });
});













});

