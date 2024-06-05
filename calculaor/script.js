function pressKey(key) {
    const display = document.getElementById('display');
    if (display.value === '0' || display.value === 'Error') {
        display.value = key;
    } else {
        display.value += key;
    }
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;
    let result = 0;
    try {
        result = eval(expression); 
    } catch (error) {
        result = 'Error';
    }
    display.value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function backspace() {
    const display = document.getElementById('display');
    let newValue = '';
    for (let i = 0; i < display.value.length - 1; i++) {
        newValue += display.value[i];
    }
    display.value = newValue || '0';
}
