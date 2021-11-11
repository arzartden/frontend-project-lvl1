import readlineSync from 'readline-sync';
import * as calc from './games/calc-game.js';

let userName;
let answer;

// console.log('Welcome to the Brain Games!');

// запрос имени пользователя
const getNameForHello = (questionToTheUser) => {
  userName = readlineSync.question(questionToTheUser);
  console.log(`Hello, ${userName}!`);
};

// функция для получения случайного целого числа из интвервала включительно
export const getRandomNumber = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

// запрос ответа пользователя в игре
const getAnswerFromTheUser = (answerUser) => {
  answer = readlineSync.question(answerUser);
};

// проверка равильности ответа пользователя
const checkAnswerUser = (fooGenerate, fooAnswer, expectedValue) => {
  for (let i = 1; i <= 3; i += 1) {
    fooGenerate();
    fooAnswer();
    const correctAnswer = 'Correct!';
    const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${expectedValue}'.`;
    const variable = (answer === expectedValue) ? correctAnswer : wrongAnswer;
    if (variable !== correctAnswer) {
      console.log(wrongAnswer);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(correctAnswer);
  }
  console.log(`Congratulations, ${userName}!`);
};

export const finalFunction = () => {
  console.log('Welcome to the Brain Games!');
  getNameForHello('May I have your name? ');
  console.log(calc.taskTextForUser);
  checkAnswerUser(calc.generateExpression(getRandomNumber(1, 25), getRandomNumber(0, 2)), getAnswerFromTheUser('Your answer: '), calc.expectedResponse);
};
