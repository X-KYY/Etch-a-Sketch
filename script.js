let gridContainer = document.querySelector('#grid-container');

function createGrid(size) {
    let boxSize = 100 / size;

    for (let i = 1;i <= size * size;i++) {
        let box = document.createElement('div');
        box.append(i);
        box.classList.add('boxes-container');
        box.style.maxWidth = `${boxSize}%`
        box.style.maxHeigth = `${boxSize}%`
        gridContainer.appendChild(box);
    }
}
// createGrid(4)