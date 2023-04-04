




document.addEventListener("DOMContentLoaded", setupCalculator)

function setupCalculator() {
    const grid = document.querySelector("#grid-container")
    const display = document.querySelector("#equation-box")

    let value = 0
    let previousVal = 0
    let pendingOperation = ""

    function buttonUse(event) {
        value = parseFloat(value + event.target.value)
        display.innerText = value
    }
    function checkCheck(event) {
        if (display.innerText.length == 12) {
            event.target.removeEventListener("click", buttonUse)
        } else {
            return null
        }
    }

    for (i = 0; i <= 9; i++) {
        const button = document.createElement("button")
        button.id = "num" + i
        button.value = i
        button.innerText = i
        grid.appendChild(button)
        button.addEventListener("click", buttonUse)
        button.addEventListener("click", checkCheck)

    }
    //adds event listener to reload page to all clear calculator
    const allClear = document.querySelector("#AC")

    allClear.addEventListener("click", clear)

    function clear() {
        window.location.reload()

    }
    //enables backspace to delete first number in string or however you are calling your method
    document.addEventListener("keydown", KeyCheck);
    function KeyCheck(event) {
        var KeyID = event.keyCode;
        switch (KeyID) {
            case 8:
            case 46:
                removeOne()
                break;
            default:
                break;
        }
    }

    function removeOne() {
        value = value.substring(0, value.length - 1);
        display.innerText = value
    }

    //pushes symbol to create negative number
    const negative = document.querySelector("#negative")

    negative.addEventListener("click", () => {
        value = value * -1
        display.innerText = value
    })

    const operation = document.querySelectorAll(".op")

    for (op of operation) {
        op.addEventListener("click", event => {
            theHandler(event.target)
        })
    }

    function theHandler(op) {
        if (pendingOperation == "") {
            previousVal = value
            value = ""
            display.innerText = value
        }
        console.log(op.value)
        pendingOperation = op.id

    }

    const equals = document.querySelector("#equals")

    equals.addEventListener("click", () => {
        switch (pendingOperation) {
            case "plus": value += previousVal
                break;
            case "minus": value = previousVal - value
                break;
            case "multiply": value *= previousVal
                break;
            case "divide": value = previousVal / value
                break;
        }
        display.innerText = value
    })


}










