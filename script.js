'use strict'; 

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log( persone["isMarried"] );

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[1]);

//alert("hi");

//let answer = confirm("Are you here?");

//console.log(answer);

//let answer = +prompt("are you 18?", "yes");

//console.log(answer);

//console.log("arr" + " - object");
//console.log(4 + +"object");

let incr = 10,
    decr = 10;

//incr++;//форма постфиксная 
//decr--;

//++incr;//префиксная форма 
//--decr;
console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" == 2); // сравнение по значениям
console.log("2" === 2); // сравнение по типам данных

let isChecked = true,
    isClose = false;

console.log(isChecked && !isClose);// оператор и // оператор (! не)
console.log(isChecked || isClose);// оператор или



