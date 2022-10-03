const frases = [
    "A vida é bela", 
    "A vida é curta", 
    "A vida é uma dádiva"
];

const mudaFrase = (target, array) => {
    let index = 0;
    setInterval(() => {
        document.querySelector(target).innerHTML = array[index];
        index++;
    }, 4000);
    if(index >= array.length) {
        index = 0;
    }
};
mudaFrase("h1", frases);