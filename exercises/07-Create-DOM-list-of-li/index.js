// let beginning = "<ul>";
// let liststring = "";
// let ending = "</ul>";

// // do not modify after this line
// document.body.innerHTML = beginning + liststring + ending;
let ul = document.createElement('ul');

let li = document.createElement('li');
let liTexto = document.createTextNode("elemento 1");
li.appendChild(liTexto);

let li2 = document.createElement('li');
let liTexto2 = document.createTextNode("elemento 2");
li2.appendChild(liTexto2);

let li3 = document.createElement('li');
let liTexto3 = document.createTextNode("elemento 3");
li3.appendChild(liTexto3);

ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);

document.body.appendChild(ul);