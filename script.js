const calculatorContainer = document.createElement("div");
calculatorContainer.id = "calc-container";
const calculator = document.createElement("div");
calculator.id = "calculator";


let row1 = document.createElement("div");
row1.classList.add("row");
const display = document.createElement("div");
display.classList.add("display");
row1.appendChild(display);
calculator.appendChild(row1);

const buttonLabels = [
  ['AC', 'DEL', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
];

const operatorMap = {
  '/': 'divide',
  'x': 'multiply',
  '-': 'subtract',
  '+': 'addition',
  '.': 'decimal',
  '=': 'equal'
}

const numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (let i = 0; i < buttonLabels.length; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < buttonLabels[i].length; j++) {
    let button = document.createElement("button");
    const label = buttonLabels[i][j];
    button.textContent = label;

    if (label in numberList) {
      button.classList.add("number");
      if (label == '0') {
        button.classList.add("zero");
      }
    }

    else if (label in operatorMap) {
      button.classList.add("operator");
      button.classList.add(operatorMap[label]);
    }

    else {
      button.classList.add("largebutton");
      if (label == 'AC') {
        button.classList.add("clear");
      }
      if (label == 'DEL') {
        button.classList.add("delete");
      }
    }
    row.appendChild(button);
  }
  calculator.appendChild(row);
}


calculatorContainer.appendChild(calculator);
document.body.appendChild(calculatorContainer);

