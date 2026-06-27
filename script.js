let gridContainer = document.querySelector('#grid-container');
let buttonContainer = document.querySelector('.button-container');
let boxesContainer;
const gridScale = parseFloat(getComputedStyle(gridContainer).width);
let size = 16;
let colorState = 'black';


    function createGrid(size) {
    let boxSize = gridScale / size;

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
    const OPACITY = 10;
    document.querySelectorAll('.boxes-container').forEach(box => {
        // For computer
        box.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = colorState;
            let objOpacity = getComputedStyle(event.target).opacity * 100;
            if (colorState == 'black') {
                event.target.style.opacity = `${OPACITY + objOpacity}%`
            }  else {
                event.target.style.opacity = '0'
            }
    })
    // For mobile
        box.addEventListener('click', (event) => {
            event.target.style.backgroundColor = colorState;
            let objOpacity = getComputedStyle(event.target).opacity * 100;
            if (colorState == 'black') {
                event.target.style.opacity = `${OPACITY + objOpacity}%`
            }  else {
                event.target.style.opacity = '0'
            }
    })
})
}

function resetColor() {
    document.querySelectorAll('.boxes-container').forEach((box) => {
        box.style.backgroundColor = 'white';
        box.style.opacity = 0;
    })
}

// Resize grid
function setGridSize() {
    size = parseFloat(prompt('how many number do you want to set'));
    if (size > 100) {
        return alert('Are you kidding me?')
    } else if (isNaN(size)) {
        return alert('You are not input a number')
    }
    gridContainer.textContent = '';
    createGrid(size);
    changeColor();
    
}

// Cases for button
buttonContainer.addEventListener('click', (event) => {
    let point = event.target.closest('BUTTON');

    switch(point.dataset.action) {
        case 'reset':
            resetColor();
            break;

        case 'resize':
            setGridSize();
            break;

        case 'erase': 
            colorState = 'white';
            break;

        case 'pen': 
            if (colorState == 'black') {
                alert('already black')
            }
            colorState = 'black';
    }
})
createGrid(size);
changeColor();
