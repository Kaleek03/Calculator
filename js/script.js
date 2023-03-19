document.addEventListener( "DOMContentLoaded", setupCalculator)

// declaring all constants
const log = document.querySelector('.equation-box')
const equals = document.querySelector('.equals')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const AC = document.querySelector('.AC')
const negative = document.querySelector('.negative')
const percent = document.querySelector('.percent')
const divide = document.querySelector('.divide')

// sets up Calculator by query selecting needed id's and classes
function setupCalculator() {
    const grid = document.querySelector('#grid-container')
    grid.style.display = 'grid';
    const log = document.querySelector('.equation-box')

// creates buttons 0 - 9 all of them have an event listener to print to equation box div as a string
    for(i = 0; i <= 9; i++) {
       const button = document.createElement('button')
        button.className = ('num' + i)
        button.value = (i)
        button.innerText = (i)
        grid.appendChild(button)
        button.addEventListener("click", (event) => {
            log.append(event.target.textContent)
        });
    }
}

