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
const mudaTitulo2 = function (novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo;
};

//arrow function
//não existe o this, nem método construtor.
//sintaxe mais simples e prática.
const relogio = () => {
    const date = new Date();
    mudaTitulo2(date.toLocaleDateString());
};
setInterval(relogio, 1000);