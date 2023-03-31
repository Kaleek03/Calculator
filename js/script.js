

// declaring all constants
const equals = document.querySelector('.equals')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const AC = document.querySelector('.AC')
const negative = document.querySelector('.negative')
const percent = document.querySelector('.percent')
const divide = document.querySelector('.divide')	

		
		document.addEventListener("DOMContentLoaded", setupCalculator)
			
		function setupCalculator() {
			const grid = document.querySelector("#grid-container")
            const display = document.querySelector(".equation-box")	

            let value = ""
			
			for (i = 0; i <= 9; i++) {
				const button = document.createElement("button")
				button.className = "num" + i
				button.value = i
				button.innerText = i
                grid.appendChild(button)
				button.addEventListener("click", buttonUse)
            
                    function buttonUse() {
                        value += button.value
                    display.innerText = value
                    }

                    display.addEventListener("", remove)
                    
                    function remove() {
                        if(display.innerText.length == 13) {
                            console.log("hello")
                        }
                    }
                }
            }
            
    

    


       
