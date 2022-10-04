const carrosDOM = document.querySelector("#carros");

const veiculos = ["Chevrolet", "Ford", "Fiat", "Vw", "Honda", "Toyota", "Hyundai"];

// adiciona ao final
veiculos.push("BMW");

// adiciona ao início
veiculos.unshift("Audi");

// remove do início
const primeiro = veiculos.shift();
console.log("Removendo primeiro elemento:", primeiro);

// remove do final
const ultimo = veiculos.pop();
console.log("Removendo último elemento:", ultimo);

// remove 1 elemento
veiculos.splice(2,1);

// remove mais de 1 elemento
veiculos.splice(1, 2);

// remove e adiciona
veiculos.splice(1, 2, "Ferrari", "Lamborghini");

veiculos.forEach((value, key) => {
    carrosDOM.innerHTML += `<option value="${key}">${value}</option>`
});


// splice - remove e adiciona elementos

// slice - retorna novo array

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

const newNba = nbaTeams.slice(3, 5);

console.log(nbaTeams.slice(-1));
console.log(nbaTeams);

const name = "Glaucio Daniel Souza Santos";
const nameArray = name.split(" ");
const nameComplete = [nameArray[0], nameArray.splice(-1)].join(" ");
console.log(nameComplete);

const procuraCeltic = (nomeTime) => {
    return nomeTime == "Celtics" || nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic);
const celticsFilter = nbaTeams.filter(procuraCeltic);
const celticsFind = nbaTeams.find(procuraCeltic);

console.log(celticsMap, "map"); // retorna novo array, mapeando e buscando no array anterior
console.log(celticsFilter, "filter"); // retorna novo array, procura do começo ao fim 
console.log(celticsFind, "find"); // retorna a primeira ocorrencia 