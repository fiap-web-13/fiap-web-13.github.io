// const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

// alvo.addEventListener("evento", função);

body.addEventListener("mouseover", (e) => {
    body.style.background = "#d4d4d4";
});

body.addEventListener("mouseout", (e) => {
    body.style.background = "unset";
});

tooltip.addEventListener("mouseover", (e) => {
    console.log("Altura da página", body.clientHeight);
    console.log("Largura da página", body.clientWidth);
    console.log("Altura do tooltip", tooltip.clientHeight);
    console.log("Largura do tooltip", tooltip.clientWidth);
    console.log("Altura do mouse", e.clientY);
    console.log("Largura do mouse", e.clientX);

    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip");
    newDiv.innerHTML = "Minions ipsum poulet tikka masala tulaliloo bee do bee do bee do."

    const largura = 200;
    newDiv.style.position = "fixed";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.display = "flex";
    newDiv.style.left = (e.clientX + largura > body.clientWidth ? e.clientX - largura : e.clientX + largura) + "px";

    header.appendChild(newDiv);
});

tooltip.addEventListener("mouseout", (e) => {
    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
});

const tooltipFunc = (target, text) => {
    const div = document.querySelector(target);
    div.addEventListener("mouseover", () => {
        div.innerHTML = text;
    })
}

// tooltipFunc("#tooltip", "texto do tooltip");