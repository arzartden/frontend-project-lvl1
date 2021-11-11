// возвращает результат выполнения матем. выражения, которое было отображено
const calculateArrayExpression = (arr) => {
  const lengthArr = arr.length;
  let value = arr[0];
  let result = value;
  for (let i = 2; i < lengthArr; i += 2) {
    value = parseInt(arr[i], 10);
    const operation = arr[i - 1];
    if (operation === '+') {
      result += value;
    } else if (operation === '-') {
      result -= value;
    } else if (operation === '*') {
      result *= value;
    }
  }
  return result;
};

// генерирует операнды и оператора для выражения
const generateExpression = (fooRandom, fooRandomArr) => {
  const randomNum1 = String(fooRandom(1, 25));
  const randomNum2 = String(fooRandom(1, 25));
  const operators = ['+', '-', '*'];
  const elementArr = fooRandomArr(0, 2);
  const randomExpressionArray = [randomNum1, operators[elementArr], randomNum2];
  const expectedResponse = calculateArrayExpression(randomExpressionArray);
  console.log(`Question: ${randomExpressionArray.join(' ')}`);
};

export default generateExpression;
