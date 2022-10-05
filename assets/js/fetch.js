const cep = document.querySelector("#cep");

const showData = (result) => {
    for(const campo in result) {
        if(document.querySelector("#"+campo)) {
            document.querySelector("#"+campo).value = result[campo];
        };
    };
};

cep.addEventListener("blur", async (e) => {
    let search = cep.value.replace("-", "");
    if(search.length < 8 || Number(search.value) === NaN) {
        alert("CEP inválido!");
        cep.focus();
        return;
    };

    const options = {
        method: "GET",
        mode: "cors", // habilita acessar mais de um domínio
        cache: "default"
    };

    //recurso assíncrono, retorna uma promise pq eu não sei se vai funcionar (site externo, nao sei se vai estar no ar, se vai dar certo, etc).
    //Promise é um recurso que não temos certeza se deu certo ou não, é uma intenção.
    //Se der certo, retorna resolve. Se der errado, retorna reject.
    //resolver quer dizer funcionou, aí usamos a função then, se der errado, catch.
    // fetch(`https://viacep.com.br/ws/${search}/json`, options)  // fetch nativo do JS
    // .then(response => {
    //     response.json()
    //     .then(result => {
    //         console.log(result);
    //     })
    // })
    // .catch(err => {console.log(e.message)});

    try {
        const resultado = await fetch(
            `https://viacep.com.br/ws/${search}/json`, 
            options
        );
        const json = await resultado.json();
        showData(json);
    } catch(error) {
        console.log("Temos um problema", error.message);
    };

});