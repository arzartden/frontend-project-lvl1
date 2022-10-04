import engineFunction from '../index.js';

const calculateExpression = (items) => {
  const leftOperand = items[0];
  const operator = items[1];
  const rightOperand = items[2];
  let result;

  switch (operator) {
    case '+':
      result = leftOperand + rightOperand;
      break;
    case '-':
      result = leftOperand - rightOperand;
      break;
    case '*':
      result = leftOperand * rightOperand;
      break;
    default:
      break;
  }

  return String(result);
};

const getDataForGame = () => {
  const rule = 'What is the result of the expression?';
  const randomNum1 = Math.floor(Math.random() * 26);
  const randomNum2 = Math.floor(Math.random() * 26);
  const operators = ['+', '-', '*'];
  const randomPosition = Math.floor(Math.random() * 3);
  const randomItems = [randomNum1, operators[randomPosition], randomNum2];
  const valueForQuestion = randomItems.join(' ');
  const expectedResponse = calculateExpression(randomItems);

  return [rule, valueForQuestion, expectedResponse];
};

export default () => engineFunction(getDataForGame);
