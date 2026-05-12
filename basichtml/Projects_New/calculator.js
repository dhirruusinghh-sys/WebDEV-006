var display = document.getElementById("display");

function add(value) {
    if (display.value == "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);

    if (display.value == "") {
        display.value = "0";
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}