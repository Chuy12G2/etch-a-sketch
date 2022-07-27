const griContainer = document.getElementById("grid-container");
const buttonSmall = document.querySelector(".small-density-button");
const buttonMedium = document.querySelector(".medium-density-button");
const buttonBig = document.querySelector(".big-density-button");
const buttonBlack = document.querySelector(".black-button");
const buttonRed = document.querySelector(".red-button");
const buttonRainbow = document.querySelector(".rainbow-button");


let divElements = [];
var currentColor = "black";
var densityNum = 16;

function createGrid(density){
    let widthAndHeigth = (576 / density) +'px';
    for(let i = 0; i < (density*density); i++){
        divElements[i] = document.createElement("div");
        divElements[i].classList.add("divs")
        divElements[i].style.height = widthAndHeigth;
        divElements[i].style.width = widthAndHeigth;
        griContainer.appendChild(divElements[i]); 
    }
}

buttonSmall.addEventListener('click', () => {
    griContainer.innerHTML = "";
    createGrid(16);
    densityNum = 16;
    selectColor(currentColor, densityNum);
});

buttonMedium.addEventListener('click', () => {
    griContainer.innerHTML = "";
    createGrid(40);
    densityNum = 40;
    selectColor(currentColor, densityNum);

});

buttonBig.addEventListener('click', () => {
    griContainer.innerHTML = "";
    createGrid(64);
    densityNum = 64;
    selectColor(currentColor, densityNum);
    
});


createGrid(16);

function selectColor(color, density){
    for(let i = 0; i < (density*density); i++){
        divElements[i].addEventListener('mouseenter', () => {
         divElements[i].style.backgroundColor = color;
        }) 
}
}

function selectColorRamdom(color, density){
    for(let i = 0; i < (density*density); i++){
        divElements[i].addEventListener('mouseenter', () => {
         divElements[i].style.backgroundColor = color[Math.floor(Math.random()*6)];
        }) 
}
}


buttonBlack.addEventListener('click', () => {
    selectColor("black", densityNum);
    currentColor = "black";
});

buttonRed.addEventListener('click', () => {
    selectColor("red", densityNum);
    currentColor = "red";
});

buttonRainbow.addEventListener('click', () => {
    let arrayColors = ["red", "blue", "green", "yellow", "purple", "pink"];
    selectColorRamdom(arrayColors, densityNum);
    currentColor = "pink";
});


selectColor("black", 16);