const grid = document.querySelector("#grid");
let gridSize = 16;
const squareSize = '20px';

for (var i = 1; i <= gridSize * gridSize; i++) {
    let square = document.createElement("div");
    square.className = "grid-div";
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.style.flexShrink = 0;
    grid.appendChild(square);
    square.addEventListener('mouseover', () => square.style.backgroundColor = getRandomColour());
}

function getRandomColour() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}