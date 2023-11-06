function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid input!");
        clearDisplay();
    }
}

function square() {
    const display = document.getElementById("display");
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = inputValue * inputValue;
    } else {
        alert("Invalid input!");
        clearDisplay();
    }
}