let textValue = '';

function addNumber(Number) {
    textValue += Number;
    updateText();
};
function erase() {
    textValue = textValue.substring(0, textValue.length - 1);
    updateText();
};
function addOperator(Operator) {
    
    textValue += Operator;
    updateText();
};
function addDecimal() {
    
    textValue += '.';
    updateText();
};
function clearText() {
    textValue = '';
    updateText();
};
function updateText() {

    document.querySelector('#display').value = textValue;
}; 

function calculate() {

    textValue = eval(textValue);
    if (isNaN){
        // When the user clicks on <div>, open the popup
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");

        document.getElementById('tudo').style.backgroundImage = "./Aula12/gojo_purple.jpg"
  }
    }
    updateText();