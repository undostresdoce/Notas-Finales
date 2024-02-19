// Declaracion de variables

console.log("Entrando al programa");
alert("¡Hola, aquí puedes calcular tus promedios, mucho éxito!");

let nota1HTML = document.getElementById("HTML1");
let nota2HTML = document.getElementById("HTML2");
let nota3HTML = document.getElementById("HTML3");
let HTMLPromedio = document.getElementById("HTMLPromedio");

let nota1h = Number(prompt("Ingresa tu nota 1 HTML:"));
let nota2h = Number(prompt("Ingresa tu nota 2 HTML:"));
let nota3h = Number(prompt("Ingresa tu nota 3 HTML:"));

let promedioh = (nota1h + nota2h + nota3h) / 3;

nota1HTML.innerHTML = nota1h;
nota2HTML.innerHTML = nota2h;
nota3HTML.innerHTML = nota3h;

HTMLPromedio.innerHTML = promedioh.toFixed(2);

console.log("Promedio HTML:", promedioh);

let nota1CSS = document.getElementById("CSS1");
let nota2CSS = document.getElementById("CSS2");
let nota3CSS = document.getElementById("CSS3");
let CSSPromedio = document.getElementById("CSSPromedio");

let nota1c = Number(prompt("Ingresa tu nota 1 CSS:"));
let nota2c = Number(prompt("Ingrese tu nota 2 CSS:"));
let nota3c = Number(prompt("Ingrese tu nota 3 CSS:"));

let promedioc = (nota1c + nota2c + nota3c) / 3;

nota1CSS.innerHTML = nota1c;
nota2CSS.innerHTML = nota2c;
nota3CSS.innerHTML = nota3c;

CSSPromedio.innerHTML = promedioc.toFixed(2);

let nota1JS = document.getElementById("JS1");
let nota2JS = document.getElementById("JS2");
var nota3JS = document.getElementById("JS3");
let JSPromedio = document.getElementById("JSPromedio");

let nota1j = Number(prompt("Ingresa tu nota 1 JS:"));
let nota2j = Number(prompt("Ingresa tu nota 2 JS:"));
let nota3j = Number(prompt("Ingresa tu nota 3 JS:"));

let promedioj = (nota1j + nota2j + nota3j) / 3;

nota1JS.innerHTML = nota1j;
nota2JS.innerHTML = nota2j;
nota3JS.innerHTML = nota3j;

JSPromedio.innerHTML = promedioj.toFixed(2);
