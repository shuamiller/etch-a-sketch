for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement('div');
    const container = document.querySelector('.container');
    gridSquare.className = "grid-square";
    container.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', function(e) {
        e.target.className = 'hovered';
    })
}

function gridReset() {
    let gridSize = prompt("How many boxes per side do you want?");
    const container = document.querySelector('.container');
    container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < gridSize * gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', function(e) {
            e.target.className = 'hovered';
        })
    }
}

const button = document.querySelector(".btn");
button.addEventListener('click', gridReset);