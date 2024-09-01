const grid = document.querySelector('.grid')
const row = 8
const column = 8 
const dimensions = row * column

for (let i = 0; i < dimensions; i++){
    let squares = document.createElement('div')
    squares.classList.add('patterns')
    grid.appendChild(squares)

    if (i % 2 === 0) {
        squares.classList.add('even-squares')
    } else {
        squares.classList.add('odd-squares')
    }
}