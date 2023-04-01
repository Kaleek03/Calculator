

// declaring all constants
const equals = document.querySelector('.equals')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
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
                button.addEventListener("click", checkCheck)
            
                    function buttonUse() {
                        value += button.value
                    display.innerText = value
                    }
                    function checkCheck(){
                    if (display.innerText.length == 14) {
                     button.removeEventListener("click", buttonUse)
                     } else {
                        return null
                     }
                    }
                }
                //adds event listener to reload page to all clear calculator
                const allClear = document.querySelector(".AC")

                allClear.addEventListener("click", clear)

                function clear() {
                 window.location.reload()

                }
                //enables backspace to delete first number in string or however you are calling your method
                document.addEventListener("keydown", KeyCheck);  
                function KeyCheck(event)
                {
                var KeyID = event.keyCode;
                switch(KeyID)
                {
             case 8:
             removeOne()
             break; 
             case 46:
             removeOne()
             default:
             break;
        }
    }

    function removeOne() {
        display.innerText = display.innerText.substring(0, display.innerText.length -1); 
    }

    //pushes symbol to create negative number
    const negative = document.querySelector(".negative")

    negative.addEventListener("click", diffPress => {
        display.innerText = "-" + display.innerText
    }, {once: true})


}


            
    

    


       
