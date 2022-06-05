// Variables
const sketchpad = document.getElementById("sketchpad");

// Functions
function makeGrid(gridContainer, n) {
    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

    for (let i = 1; i <= n * n; i++) {
        const slate = document.createElement("div");
        slate.classList.add("slate");
        slate.addEventListener("mouseover", etch);
        gridContainer.appendChild(slate);
    }
}

function etch(e) {
    e.target.classList.add("black");
}


// Function calls
makeGrid(sketchpad, 16);