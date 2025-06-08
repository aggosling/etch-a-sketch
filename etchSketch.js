const grid = document.querySelector("#grid");
const numberOfSquaresButton = document.querySelector("#number-of-squares");
let gridSize = 16;
const GRID_WIDTH = 320;

numberOfSquaresButton.addEventListener('click', () => {
    let numberOfSquares = parseInt(prompt("How many squares per side for the grid?", 16), 10);
    if (numberOfSquares > 100)
        numberOfSquares = 100;
    else if (numberOfSquares < 1)
        numberOfSquares = 1;
    gridSize = numberOfSquares;
    setGrid();
});

function setSquareSize() {
    return GRID_WIDTH / gridSize;
}

function setGrid() {
    clearGrid();
    let squareSize = setSquareSize(gridSize);
    for (var i = 1; i <= gridSize * gridSize; i++) {
        let square = document.createElement("div");
        square.className = "grid-div";
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.style.flexShrink = 0;
        grid.appendChild(square);
        square.addEventListener('mouseover', () => square.style.backgroundColor = getRandomColour());
    }
}

function clearGrid() {
    let squares = document.querySelectorAll(".grid-div");
    squares.forEach(square => square.remove());
}

function getRandomColour() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

setGrid();