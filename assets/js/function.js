"use strict";
//diferenças entre arrow function e função nominal ou expressões de função.

const resultado = document.querySelector("#resultado");

let myFunc1 = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

myFunc1.showArguments(
    "Vai Corinthians", 
    "FullStack Dev", 
    "React", 
    "NodeJS", 
    "Typescript"
);

//arrow function não acessa arguments
let myFunc2 = {
    showArguments: () => {
        // resultado.innerHTML = arguments;
        // console.log(...arguments);
    },
};

let user = {
    name: "Glaucio Daniel",
    usandoArrow: () => {
        console.log("Meu nome é", this.name, "-> Arrow Function");
    },
    usandoNominal() {
        console.log("Meu nome é", this.name, "-> Nominal Function");
    },
};

user.usandoArrow();
user.usandoNominal();

myFunc2.showArguments(
    "Vai Corinthians", 
    "FullStack Dev", 
    "React", 
    "NodeJS", 
    "Typescript"
);