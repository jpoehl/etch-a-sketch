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

function erase(e) {
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
    } else {
        selectedColor = getRandomColor();
    }

    e.target.style.backgroundColor = selectedColor;
}

// Variables
const sketchpad = document.getElementById("sketchpad");
let etchColor = "black";

document.getElementById("randomBtn").addEventListener("click", () => etchColor = "random");
document.getElementById("blackBtn").addEventListener("click", () => etchColor = "black");

// Buttons
//* Erase
const eraseBtn = document.getElementById("eraser");
eraseBtn.addEventListener("click", erase);

// Function calls
makeGrid(sketchpad, 16);
