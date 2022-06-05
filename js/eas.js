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

function erase(e) {
    const slates = document.querySelectorAll(".slate");
    slates.forEach(s => s.className = "slate");
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

// Variables
const sketchpad = document.getElementById("sketchpad");

// Buttons
//* Erase
const eraseBtn = document.getElementById("eraser");
eraseBtn.addEventListener("click", erase);


// Function calls
makeGrid(sketchpad, 16);
