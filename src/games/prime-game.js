// для проверки числа, простое ли оно
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// функция для вывода числа пользователю
export const showGenerateExpression = (funcRandomVariable) => {
  const randomNum = funcRandomVariable(1, 200);
  const expectedResponse = isPrime(randomNum) ? 'yes' : 'no';
  console.log(`Question: ${randomNum}`);
  return expectedResponse;
};

export const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
