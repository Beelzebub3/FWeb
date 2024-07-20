let textValue = '';

function addNumber(Number) {
    textValue += Number;
    updateText();
};
function addOperator(Operator) {
    
    updateText();
};
function addDecimal() {

    updateText();
};
function clearText() {

    updateText();
};
function updateText() {

    document.querySelector('*display').value = textValue;
}; 

function calculate() {

    updateText();
};