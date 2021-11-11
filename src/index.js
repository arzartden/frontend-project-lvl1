import readlineSync from 'readline-sync';
// import * as calcModule from './games/calc-game.js';
// import * as evenModule from './games/even-game.js';

let userName;
let answer;
let out;

// запрос имени пользователя
const getUserNameHello = (questionToTheUser) => {
  userName = readlineSync.question(questionToTheUser);
  console.log(`Hello, ${userName}!`);
};

// функция для получения случайного целого числа из интвервала включительно
const getRandomNumber = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

// получение ответа пользователя
export const getAnswerFromTheUser = (userResponce) => {
  answer = readlineSync.question(userResponce);
};

// проверка правильности ответа
const checkResponce = (expectedResponse) => {
  getAnswerFromTheUser('Your answer: ');
  const correctAnswer = 'Correct!';
  const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${expectedResponse}'.`;
  const variable = (answer === expectedResponse) ? correctAnswer : wrongAnswer;
  if (variable !== correctAnswer) {
    out = true;
    console.log(wrongAnswer);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
  console.log(correctAnswer);
};

const mainFunction = (nameModuleGame) => {
  console.log('Welcome to the Brain Games!');
  getUserNameHello('May I have your name? ');
  console.log(nameModuleGame.taskText);
  for (let i = 1; i <= 3; i += 1) {
    checkResponce(nameModuleGame.showGenerateExpression(getRandomNumber));
    if (out === true) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default mainFunction;
