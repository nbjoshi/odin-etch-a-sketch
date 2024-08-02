document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const gridRange = document.querySelector("#gridrange");
    const gridText = document.querySelector("#gridtext");
    const colorInput = document.querySelector("#colorinput");
    const rainbowInput = document.querySelector("#rainbowinput");
    const eraserInput = document.querySelector("#eraserinput");
    const clearInput = document.querySelector("#clearinput");

    let color = colorInput.value;
    let rainbowMode = false;
    let eraserMode = false;

    function createGrid(size) {
        container.innerHTML = "";
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = 'calc(100% / '+size+')';
            square.addEventListener("mouseover", () => {
                if (rainbowMode) {
                    square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                }  
                else if (eraserMode) {
                    square.style.backgroundColor = "white";
                }
                else {
                    square.style.backgroundColor = color;
                }
            })
            container.appendChild(square);
        }
    };

    gridRange.addEventListener("input", (e) => {
        const size = e.target.value;
        gridText.textContent = `Size: ${size} x ${size}`;
        createGrid(size);
    });

    colorInput.addEventListener("input", (e) => {
        color = e.target.value;
    });

    rainbowInput.addEventListener("input", (e) => {
        rainbowMode = e.target.checked;
    });

    eraserInput.addEventListener("input", (e) => {
        eraserMode = e.target.checked;
    });

    clearInput.addEventListener("click", () => {
        const grids = document.querySelectorAll(".square");
        grids.forEach((grid) => {
            grid.style.backgroundColor = "white";
        })
    })

    createGrid(gridRange.value);
});
