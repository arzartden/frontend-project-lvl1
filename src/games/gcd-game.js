// поиск НОД
export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

// генерирует числа для задания
export const showGenerateExpression = (funcRandomVariable) => {
  const randomNum1 = funcRandomVariable(0, 100);
  const randomNum2 = funcRandomVariable(0, 100);
  const randomExpressionArray = [randomNum1, randomNum2];
  const expectedResponse = String(gcd(randomNum1, randomNum2));
  console.log(`Question: ${randomExpressionArray.join(' ')}`);
  return expectedResponse;
};

export const taskText = 'Find the greatest common divisor of given numbers.';
