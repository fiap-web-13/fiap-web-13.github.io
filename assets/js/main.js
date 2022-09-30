//const e let nao tem hoisting
const nome = "Fiap";
console.log(nome);


//função nominal - udf
//sofre hoisting
function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = novoTitulo;
};

//expressão de função - Function Expression
//função anônima

// const mudaTitulo2 = function (target, novoTitulo) {
//     document.querySelector(target).innerHTML = novoTitulo;
// };
// mudaTitulo2("h1", "Trocando o titulo");

//arrow function
//não existe o this, nem método construtor.
//sintaxe mais simples e prática.


// const relogio = () => {
//     const date = new Date();
//     mudaTitulo2("h2", date.toLocaleTimeString());
// };

// setInterval(relogio, 1000);

// setInterval(() => {}, tempo);

const frases = ["A vida é bela", "A vida é curta", "A vida é uma dádiva"];

const mudaFrase = (target, array) => {
    array.forEach((item) => document.querySelector(target).innerHTML = item);
    // setInterval(escreveFrase, time);
};

// mudaFrase("h1", frases, 4000);

setInterval(() => frases.map((item) => document.querySelector("h1").innerHTML = item), 4000);
