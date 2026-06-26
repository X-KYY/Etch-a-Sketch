let gridContainer = document.querySelector('#grid-container');
let buttonContainer = document.querySelector('.button-container');
let boxesContainer;
const GRIDSCALE = parseFloat(getComputedStyle(gridContainer).width);
let SIZE = 16;


    function createGrid(size) {
    let boxSize = GRIDSCALE / size;

    for (let i = 1;i <= size * size;i++) {;
        let box = document.createElement('div');
        box.textContent = ' ';
        box.classList.add('boxes-container');
        box.style.width = `${boxSize}px`
        box.style.height = `${boxSize}px`;        
        gridContainer.appendChild(box);
    }
}

// Change color to black every singgle mouseover
function changeColor() {
    let OPACITY = 10;
    document.querySelectorAll('.boxes-container').forEach(box => {
        box.addEventListener('mouseover', (event) => {
          event.target.style.backgroundColor = 'black';
          let objOpacity = getComputedStyle(event.target).opacity * 100;
          event.target.style.opacity = `${OPACITY + objOpacity}%`
    })
})
}

// Remove color
function eraseColor() {
    document.querySelectorAll('.boxes-container').forEach((box) => {
        box.style.backgroundColor = 'white';
        box.style.opacity = 0;
    })
}

// Resize grid
function setGridSize() {
    SIZE = parseFloat(prompt('how many number do you want to set'));
    if (SIZE > 100) {
        return alert('Are you kidding me?')
    } else if (isNaN(SIZE)) {
        return alert('You are not input a number')
    }
    gridContainer.textContent = '';
    createGrid(SIZE);
    changeColor();
    
}

buttonContainer.addEventListener('click', (event) => {

    switch(event.target.dataset.action) {
        case 'erase':
            eraseColor();
            break;

        case 'resize':
            setGridSize();
            break;
    }
})
createGrid(SIZE);
changeColor();
