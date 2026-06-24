let gridContainer = document.querySelector('#grid-container');

const GRIDSCALE = parseFloat(getComputedStyle(gridContainer).width);

function createGrid(size) {
    let boxSize = GRIDSCALE / size;

    for (let i = 1;i <= size * size;i++) {
        let box = document.createElement('div');
        box.textContent = ' ';
        box.classList.add('boxes-container');
        box.style.width = `${boxSize}px`
        box.style.height = `${boxSize}px`;        
        gridContainer.appendChild(box);
    }
}
createGrid(16)
let boxesContainer = document.querySelectorAll('.boxes-container');

boxesContainer.forEach(box => {
    box.addEventListener('mouseover', function changeColor(event) {
        event.target.style.backgroundColor = 'black';
    })
})
