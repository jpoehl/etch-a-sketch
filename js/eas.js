// Functions
function makeGrid(gridContainer, n) {
    gridContainer.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (let i = 1; i <= n * n; i++) {
        const slate = document.createElement("div");
        slate.classList.add("slate");
        slate.addEventListener("mouseover", etch);
        gridContainer.appendChild(slate);
    }
}

function erase() {
    const slates = document.querySelectorAll(".slate");
    slates.forEach(s => s.style.backgroundColor = "white");
    etchColor = "black";
}

function getRandomColor() {
    // https://stackoverflow.com/questions/10014271/generate-random-color-distinguishable-to-humans
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function etch(e) {
    let selectedColor;

    if (etchColor == "black") {
        selectedColor = "black";
    } else if (etchColor == "random") {
        selectedColor = getRandomColor();
    } else {
        selectedColor = etchColor;
    }

    e.target.style.backgroundColor = selectedColor;
}

function resize() {
    let newSize;

    do {
        newSize = parseInt(prompt("How many slates per side do you want? Please specify a positive integer between 1 and 100."));
    } while (newSize < 1 || newSize > 100 || isNaN(newSize));

    erase();
    makeGrid(sketchpad, newSize);
}

// Variables
//* Store sketchpad in a variable for size manipulations
const sketchpad = document.getElementById("sketchpad");

// Function calls
makeGrid(sketchpad, 16);

//* Set etching colors - default and based on user choice
let etchColor = "black";

document.getElementById("randomBtn").addEventListener("click", () => etchColor = "random");
document.getElementById("blackBtn").addEventListener("click", () => etchColor = "black");
document.getElementById("colorBtn").addEventListener("input", (e) => etchColor = e.target.value);

// Buttons
//* Erase
const eraseBtn = document.getElementById("eraser");
eraseBtn.addEventListener("click", erase);

//* Resize
const resizeBtn = document.getElementById("resize");
resizeBtn.addEventListener("click", resize);
