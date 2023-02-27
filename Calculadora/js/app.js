let calculation = '';
let result = '';

const calculationDisplay = document.getElementById('calculation');
const resultDisplay = document.getElementById('result');

const numButtons = document.querySelectorAll('button');

numButtons.forEach(button => {
    button.addEventListener('click', ()=>{
      const buttonVal = button.value;
      if (buttonVal === 'C') {
        calculation = '';
        result = '';
      } else if (buttonVal === 'del') {
        calculation = calculation.slice(0, -1);
      } else if (buttonVal === '=') {
        try {
          result = eval(calculation);
          if (result === Infinity || result === -Infinity) {
            throw new Error('Division by zero');
          }
        } catch (error) {
          result = 'Error';
        }
      } else {
        calculation += buttonVal;
      }
      calculationDisplay.innerText = calculation;
      resultDisplay.innerText = result;
    });
  });