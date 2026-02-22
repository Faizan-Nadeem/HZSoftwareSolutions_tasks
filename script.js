const display = document.getElementById("display");
let currentInput = "";


function appendValue(value) {
    currentInput += value;
    display.value = currentInput;
}


function clearDisplay() {
    currentInput = "";
    display.value = "";
}


function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}


function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
        currentInput = "";
    }
}


document.addEventListener("keydown", function (event) {
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});