function updateResult() {
    resetResults();
}

function appendToInput(value) {
    document.getElementById('numberInput').value += value;
    updateResult();
}

function clearInput() {
    document.getElementById('numberInput').value = '';
    resetResults();
}
function deleteLast(){
    var currentValue = document.getElementById("numberInput").value;
    document.getElementById("numberInput").value = currentValue.slice(0, -1);
}
function performConversion() {
    var conversionType = document.getElementById('conversionType').value;
    var numberInput = document.getElementById('numberInput').value;

    if (numberInput === '') {
        resetResults();
        return;
    }

    var decimalResult, binaryResult, octalResult, hexResult;

    switch (conversionType) {
        case 'decimal':
            decimalResult = parseInt(numberInput, 10);
            binaryResult = decimalResult.toString(2);
            octalResult = decimalResult.toString(8);
            hexResult = decimalResult.toString(16).toUpperCase();
            break;
        case 'binary':
            decimalResult = parseInt(numberInput, 2);
            octalResult = decimalResult.toString(8);
            hexResult = decimalResult.toString(16).toUpperCase();
            break;
        case 'octal':
            decimalResult = parseInt(numberInput, 8);
            binaryResult = decimalResult.toString(2);
            hexResult = decimalResult.toString(16).toUpperCase();
            break;
        case 'hexadecimal':
            decimalResult = parseInt(numberInput, 16);
            binaryResult = decimalResult.toString(2);
            octalResult = decimalResult.toString(8);
            break;
        default:
            resetResults();
            return;
    }

    document.getElementById('decimalResult').innerText = 'Decimal: ' + decimalResult;
    document.getElementById('binaryResult').innerText = 'Binary: ' + binaryResult;
    document.getElementById('octalResult').innerText = 'Octal: ' + octalResult;
    document.getElementById('hexResult').innerText = 'Hexadecimal: ' + hexResult;
}

function resetResults() {
    document.getElementById('decimalResult').innerText = 'Decimal: ';
    document.getElementById('binaryResult').innerText = 'Binary: ';
    document.getElementById('octalResult').innerText = 'Octal: ';
    document.getElementById('hexResult').innerText = 'Hexadecimal: ';
}