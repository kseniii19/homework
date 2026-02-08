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



////////////////////////////////////////////////




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

//////////////////////////////////////////////

let o = 0;

    let but = document.querySelector(".but");
    let point = document.querySelector(".point");

    but.addEventListener ("click", function(){
        if(o < 16){
            o++;
            point.textContent = o;
        }

        if(o >= 16){
            o--;
            point.textContent = o;
        }
    })


    let timer_value = 10;
    let timer_interval = null;

    let timer_button_on = document.querySelector(".timer_button_on");
    let timer_button_off = document.querySelector(".timer_button_off");
    let timer_span = document.querySelector(".timer_span");

    timer_button_on.addEventListener ("click", function(){
        
        timer_value = 10;
        timer_span.textContent = timer_value;

        timer_interval = setInterval(function(){
            timer_value--;
            timer_span.textContent = timer_value;
            if (timer_value === 0){
                clearInterval(timer_interval)
                alert("Время вышло!")
            }
        },1000)

    })

    timer_button_off.addEventListener ("click", function(){
         clearInterval(timer_interval)       
    })


    let timer_value2 = 0;
    let timer_interval2 = null;

    let timer_button_on2 = document.querySelector(".timer_button_on2");
    let timer_button_off2 = document.querySelector(".timer_button_off2");
    let timer_button_sbros = document.querySelector(".timer_button_sbros");
    let timer_span2 = document.querySelector (".timer_span2");

    
    timer_button_on2.addEventListener ("click", function(){

        if (timer_interval2 === null){
            timer_interval2 = setInterval(function(){
                timer_value2++;
                timer_span2.textContent = timer_value2;
            },1000)
        }
    })

    timer_button_off2.addEventListener ("click", function(){
        clearInterval(timer_interval2)
        timer_interval2 = null;
    })

    timer_button_sbros.addEventListener ("click", function(){
        timer_value2 = 0;
        timer_span2.textContent = timer_value2;

    })





    










});

