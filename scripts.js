let expression = "0"

function display(number) {
    if (expression == "0") {
        expression = number;
    }
    else {
        expression += number;
    }
    document.getElementById("display").value = expression
    console.log(expression);
}

function execute() {
    try {
        expression = eval(expression).toString();
    }
    catch (error) {
        expression = "Error"
    }
    document.getElementById("display").value = expression;
    console.log(expression);
}

function clearDisplay() {
    expression = "0"
    document.getElementById("display").value = expression
}

function clear_lastdigit() {
    if (expression.length <= 1) {
        expression = "0";
    }
    else {
        expression = expression.slice(0, -1);
    }
    document.getElementById("display").value = expression;
}
