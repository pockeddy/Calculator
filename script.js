var total=0;
var operatorPressed;
var display = document.getElementById('display');
const numbers = document.querySelector('.numbers');
for (let i = 0; i < 9; i++ ) {
  number = i+1;
  let grid = document.createElement('button');
  grid.setAttribute('class', 'grid');
  grid.setAttribute('id', `${i}`);
  grid.setAttribute('onclick',`num(${number})`);
  grid.textContent =`${number}`;
  grid.setAttribute('style', `width: 32.5%; height: 25%; float: left; border: 1px; background-color: #c3cee0; border-radius: 4px; margin: 1px; font-size: 75px;`);

  numbers.appendChild(grid);
};
let point = document.createElement('button');
point.setAttribute('class', 'grid');
point.setAttribute('id', `.`);
point.setAttribute('onclick',`num(.)`);
point.textContent =`.`;
point.setAttribute('style', `width: 32.5%; height: 25%; float: left; border: 1px; background-color: #c3cee0; border-radius: 4px; margin: 1px; font-size: 75px;`);
numbers.appendChild(point);

let zero = document.createElement('button');
zero.setAttribute('class', 'grid');
zero.setAttribute('id', `=`);
zero.setAttribute('onclick',`num(0)`);
zero.textContent =`0`;
zero.setAttribute('style', `width: 32.5%; height: 25%; float: left; border: 1px; background-color: #c3cee0; border-radius: 4px; margin: 1px; font-size: 75px;`);
numbers.appendChild(zero);

let equal = document.createElement('button');
equal.setAttribute('class', 'grid');
equal.setAttribute('id', `0`);
equal.setAttribute('onclick',`operatorButton("equals")`);
equal.textContent =`=`;
equal.setAttribute('style', `width: 32.5%; height: 25%; float: left; border: 1px; background-color: #c3cee0; border-radius: 4px; margin: 1px; font-size: 75px;`);
numbers.appendChild(equal);




function num (number){
  var displayText = display.innerHTML;

  if (displayText.length < 5) {
    if (display.innerHTML == "0000"){
      display.innerHTML = number;
    } else if (display.innerHTML == total && Number(displayText) < 9){
      display.innerHTML = number;
    }else if (display.innerHTML == total){
      display.innerHTML = "";
      display.innerHTML = number;
    } else {
      display.innerHTML = displayText + number;
    }
  }
}


function add(firstValue, secondValue) {
  total = firstValue + secondValue;
  return total;
}
function subtract(firstValue, secondValue) {
  total = firstValue - secondValue;
  return total;
}
function multiply(firstValue, secondValue) {
  total = firstValue * secondValue;
  return total;
}
function divide(firstValue, secondValue) {
  total = firstValue / secondValue;
  return total;
}

function operate(operator, firstValue, secondValue){
  var total;
  operatorSwitch = operator;
  switch (operatorSwitch) {
    case ("add"):
      total = add(firstValue, secondValue);
      return total;
      break;
    case ("subtract"):
      total = subtract(firstValue, secondValue);
      return total;
      break;
    case("multiply"):
      total = multiply(firstValue, secondValue);
      return total;
      break;
    case("divide"):
      total = divide(firstValue, secondValue);
      return total;
      break;
    default:
      console.log("help!");
  }
}


function operatorButton(operator){
  if (total == 0){
    total = display.innerHTML;
    operatorPressed = operator;
    display.innerHTML = "";
  } else if (operator == "equals"){
    totalInt = Number(total);
    inputInt = Number(display.innerHTML);
    total = operate(operatorPressed, totalInt, inputInt);
    display.innerHTML = Number((total).toFixed(2));
    operatorPressed = "";
  } else if (operator == "clear"){
    display.innerHTML = "0000";
    total = display.innerHTML;
    operatorPressed = "";
  } else {
    totalInt = Number(total);
    inputInt = Number(display.innerHTML);
    total = operate(operatorPressed, totalInt, inputInt);
    display.innerHTML = Number((total).toFixed(2));
    operatorPressed = operator;
  }
}
