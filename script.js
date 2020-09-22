const gridSquare = document.createElement('div');
const container = document.querySelector('.container');
gridSquare.className = "grid-square";

for (let i = 0; i < 256; i++) {
    container.appendChild(gridSquare);
}