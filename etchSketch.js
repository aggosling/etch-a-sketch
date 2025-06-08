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
    if (numberOfSquares) {
        gridSize = numberOfSquares;
        setGrid();
    }
});

function setSquareSize() {
    return GRID_WIDTH / gridSize;
}

function getOpacity(id) {
    const square = document.querySelector(`#${id}`);
    return square.style.opacity;
}

function increaseOpacity(opacity) {
    return opacity += 0.1;
}

function createSquare(index, squareSize) {
    let square = document.createElement("div");
    square.setAttribute("id", "square-" + index);
    square.className = "grid-div";
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    square.style.flexShrink = 0;
    square.style.opacity = 0;
    grid.appendChild(square);
    return square;
}

function setGrid() {
    clearGrid();
    const squareSize = setSquareSize(gridSize);
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let square = createSquare(i, squareSize);
        square.addEventListener('mouseover', () => {
            square.style.opacity = increaseOpacity(Number(getOpacity(square.getAttribute("id"))));
            square.style.backgroundColor = getRandomColour();
        });
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