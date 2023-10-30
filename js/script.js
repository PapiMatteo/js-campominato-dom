// DATI

const btnElem  = document.querySelector(".start");
const gridElem = document.querySelector(".grid");



// LOGICA

btnElem.addEventListener("click", handleBtnClick);

/***********************/
// FUNZIONI

function createCells(innerNumber, cellSize) {

    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.width =`calc(100% / ${cellSize})`;
    newCell.innerHTML = innerNumber;

    return newCell;

}

function handleBtnClick() {

    gridElem.innerHTML = ""
    const level        = document.querySelector("#level").value;
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
        
        default :
            gridSize = 100;
            cellSize = 10;
            break
    }

    const bombs = bombGenerator(100);
    console.log(bombs)

    for (let i = 1; i <= gridSize; i++) {

        const cell = createCells(i, cellSize);

        cell.addEventListener("click", handleCellClick);

        gridElem.append(cell);
        gridElem.classList.add("show");
        
    }
}

function handleCellClick(){

    const clickedNumber = parseInt(this.textContent);
    console.log(clickedNumber);
    this.classList.add("azure");

}

function generateRndNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bombGenerator (max) {
    const result = [];

    while (result.lenght < 16) {
        const newNum = generateRndNum(1, max)
        console.log(newNum)

        if (!result.includes(newNum)){
            result.push(newNum);
        }
    }
    return result;
}

