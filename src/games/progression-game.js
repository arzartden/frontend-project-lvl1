// создаем массив чисел арифм. прогрессии
export const getArray = (funcRandomVariable) => {
  const randomProgressionLength = funcRandomVariable(4, 9);
  const differenceOfNumbers = funcRandomVariable(2, 10);
  let elementArr = funcRandomVariable(1, 100);
  const newArr = [];
  for (let i = 0; i <= randomProgressionLength; i += 1) {
    newArr[i] = elementArr;
    elementArr += differenceOfNumbers;
  }
  return newArr;
};

// генерирует числа для задания
export const showGenerateExpression = (funcRandomVariable) => {
  const randomExpressionArray = getArray(funcRandomVariable);
  const itemElements = randomExpressionArray.length - 1;
  const numElem = funcRandomVariable(0, itemElements);
  const expectedResponse = String(randomExpressionArray[numElem]);
  randomExpressionArray[numElem] = '..';
  console.log(`Question: ${randomExpressionArray.join(' ')}`);
  return expectedResponse;
};

export const taskText = 'What number is missing in the progression?';
