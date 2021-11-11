// функция для вывода числа пользователю
export const showGenerateExpression = (funcRandomVariable) => {
  const randomNum = funcRandomVariable(1, 100);
  const expectedResponse = (randomNum % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${randomNum}`);
  return expectedResponse;
};

export const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';
