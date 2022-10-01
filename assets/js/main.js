const frases = [
    "A vida é bela", 
    "A vida é curta", 
    "A vida é uma dádiva"
];

let index = 0;
const mudaFrase = (target, array) => {
    document.querySelector(target).innerHTML = array[index];
    index++;
    if(index >= array.length) {
        index = 0;
    }
};
setInterval(() => {
    mudaFrase("h1", frases)
}, 4000);
