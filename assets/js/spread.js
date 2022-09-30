const aereasNacionais = ['Azul', 'Gol', 'Latam'];

const airCompanies = [...aereasNacionais, 'Delta', 'United', 'Emirates', 'Qatar', 'Tap'];

console.log(airCompanies);

const [azul, gol, latam, delta, ...internacionais] = airCompanies;

console.log(internacionais);

//ORM - Object Relation Map - tabela SQL ou documento NoSQL - transforma em objetos.
const user = {
    name: "Isa Sanchis",
    email: "isasanchis3@gmail.com",
    password: "123456"
};

const {password, ...data} = user;
console.log(data, "retornando dados da API");

//eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos.
// Eventos de tempo - setTimeout, setInterval
// Eventos de DOM - onClick, onChange, onSubmit
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus, onBlur, onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad, onError, onAbort

//Grandes áreas do Javascript. Funções, arrays, eventos, assíncrono, estrutura de controle e loops (controle de fluxo), objetos, API externa.

// javascript.info

const body = document.querySelector("body");
body.style.width = "100%";
body.style.height = "100vh";

body.addEventListener("mouseover", (event) => {
    body.style.backgroundColor = "#d4d4d4";
    console.log("foi", event);
});