const frases = [
    "A vida é bela", 
    "A vida é curta", 
    "A vida é uma dádiva"
];

const mudaFrase = (target, array) => {
    const mostraFrase = frases.map(item => item);
    // document.querySelector(target).innerHTML = mostraFrase;
};
setInterval(mudaFrase("h1", frases), 4000);
