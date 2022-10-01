//const e let não sofrem hoisting
const nome = "Fiap";
console.log(nome);

//função nominal - UDF
//sofre hoisting
function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = novoTitulo;
};
mudaTitulo("Novo titulo");

//expressão de função - Function Expression
//função anônima
const mudaTitulo2 = function (target, novoTitulo) {
    document.querySelector(target).innerHTML = novoTitulo;
};
mudaTitulo2("h1", "Trocando o titulo");

//arrow function
//não existe o this, nem método construtor.
//sintaxe mais simples e prática.
const relogio = () => {
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
};

// setInterval(() => {}, tempo);
setInterval(relogio, 1000);

