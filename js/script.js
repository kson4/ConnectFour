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
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.id = "notclicked";
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            //cell.addEventListener("click", selection);
            rows.appendChild(cell);
        }
    }
}
makeGrid(800, 15);

const cellElements = document.querySelectorAll("div");
let playerTurn = new Boolean(true);
function selection() {
    window.addEventListener("click", function(e) {
        if (e.target.className == "cell" && e.target.id == "notclicked") {
            e.target.style.backgroundColor = "red";
            e.target.id = "clicked";
            console.log(e.target.id);
        }
    });
}

selection();
computerMove();

//console.log(cellElements);

// let playerTurn = new Boolean(true);
// const cellElements = document.querySelectorAll("buttons");
// cellElements.forEach(cell => {
//     cell.addEventListener('click', selection, { once: true });
// });

// function selection(e) {
//     const cell = e.target;
//     console.log(e);
// }
// playGame();
// playerMove();
// computerMove();