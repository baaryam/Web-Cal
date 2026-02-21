//calculator script

let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value, );
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

