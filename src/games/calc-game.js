import readlineSync from 'readline-sync';

// функция для получения случайного целого числа из интвервала включительно
const getRandomNumber = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

// возвращает результат выполнения матем. выражения, которое было отображено
const calculateArrayExpression = (arr) => {
  const lengthArr = arr.length;
  let value = arr[0];
  let result = value;
  console.log(typeof result);
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
  const resultToStr = String(result);
  return resultToStr;
};

let expectedResponse;
// генерирует операнды и оператора для выражения
const showGenerateExpression = () => {
  const randomNum1 = getRandomNumber(1, 25);
  const randomNum2 = getRandomNumber(1, 25);
  const operators = ['+', '-', '*'];
  const elementArr = getRandomNumber(0, 2);
  const randomExpressionArray = [randomNum1, operators[elementArr], randomNum2];
  expectedResponse = calculateArrayExpression(randomExpressionArray);
  console.log(`Question: ${randomExpressionArray.join(' ')}`);
};

let userName;
// 'May I have your name? '
const getUserNameHello = (questionToTheUser) => {
  userName = readlineSync.question(questionToTheUser);
  console.log(`Hello, ${userName}!`);
};

let answer;
// функция для получения ответа пользователя
const getAnswerFromTheUser = (userResponce) => {
  answer = readlineSync.question(userResponce);
};

// основная функция для экспорта логики игры brain-even
const checkResult = () => {
  console.log('Welcome to the Brain Games!');
  getUserNameHello('May I have your name? ');
  console.log('What is the result of the expression?');
  for (let i = 1; i <= 3; i += 1) {
    showGenerateExpression();
    getAnswerFromTheUser('Your answer: ');
    const correctAnswer = 'Correct!';
    const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${expectedResponse}'.`;
    const variable = (answer === expectedResponse) ? correctAnswer : wrongAnswer;
    if (variable !== correctAnswer) {
      console.log(wrongAnswer);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(correctAnswer);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default checkResult;
