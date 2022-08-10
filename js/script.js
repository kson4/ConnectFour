const container = document.getElementsByClassName("grid")[0];

function makeGrid(boardSize, numCells) {
    id = 0;
    const cellSize = boardSize/numCells + "px";
    for (let row = 0; row < numCells; row++) {
        const rows = document.createElement("div");
        rows.setAttribute("class", "rows");
        rows.setAttribute("id", row);
        container.appendChild(rows);
        for (let col = 0; col < numCells; col++) {
            const cell = document.createElement("button");
            cell.className = "cell";
            cell.id = id++;
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            rows.appendChild(cell);
        }
    }
}

const selection = document.getElementsByClassName("cell");
function playGame() {
    playerMove();
}

function playerMove() {
    
}

makeGrid(800, 15);