// DATI

const btnElem   = document.querySelector(".start");
const gridElem  = document.querySelector(".grid");

let clickedList = [];
let bombList    = [];
let maxClick;



// LOGICA

btnElem.addEventListener("click", handleBtnClick);

/***********************/
// FUNZIONI

function createCells(innerNumber, cellSize) {

    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.width = `calc(100% / ${cellSize})`;
    newCell.innerHTML   = innerNumber;

    return newCell;

}

function handleBtnClick() {

    gridElem.innerHTML = ""
    const level = document.querySelector("#level").value;
    let gridSize;
    let cellSize;

    switch (level) {
        case "1":
            gridSize = 100;
            cellSize = 10;
            break

        case "2":
            gridSize = 81;
            cellSize = 9;
            break

        case "3":
            gridSize = 49;
            cellSize = 7;
            break

        default:
            gridSize = 100;
            cellSize = 10;
            break
    }

    bombList = bombGenerator(gridSize);
    console.log(bombList);

    maxClick = gridSize - bombList.length;
    console.log(maxClick);

    for (let i = 1; i <= gridSize; i++) {

        const cell = createCells(i, cellSize);

        cell.addEventListener("click", handleCellClick);

        gridElem.append(cell);
        gridElem.classList.add("show");

    }
}

function handleCellClick() {
    
    const clickedNumber = parseInt(this.textContent);
    console.log(clickedNumber);

    if (bombList.includes(clickedNumber)) {

        this.classList.add("red");
        console.log("Hai Perso!");

    } else {
        this.classList.add("azure");
    }
    
    if (!clickedList.includes(clickedNumber) && !bombList.includes(clickedNumber)){
        clickedList.push(clickedNumber);
    }
    console.log(clickedList)

    if (clickedList.length === maxClick){
        console.log("Hai Vinto!");
    }
}

function generateRndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bombGenerator(max) {
    const result = [];

    while (result.length < 16) {
        const newNum = generateRndNum(1, max)

        if (!result.includes(newNum)) {
            result.push(newNum);
        }
    }
    return result;
}

