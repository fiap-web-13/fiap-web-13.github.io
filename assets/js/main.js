const frases = [
    "A vida é bela", 
    "A vida é curta", 
    "A vida é uma dádiva"
];

const mudaFrase = (target, array) => {
    let index = 2;
    setInterval(() => {
        document.querySelector(target).innerHTML = array[index >= array.length - 1 ? (index = 0) : (index += 1)]; // 0 >= 3
    }, 4000);
};
mudaFrase("h1", frases);