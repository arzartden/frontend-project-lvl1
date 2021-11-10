import readlineSync from 'readline-sync';

let userName;
let randomNum;
let answer;
let outputTextforEven;

// функция для получения имени пользователя
const getUserNameHello = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// функция для получения случайного целого числа из интвервала включительно
const getRandomNumber = (min, max) => {
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

// функция для вывода числа пользователю
const showNum = () => {
  randomNum = getRandomNumber(1, 100);
  outputTextforEven = (randomNum % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${randomNum}`);
};

// функция для получения ответа пользователя
const getAnswerFromTheUser = () => {
  answer = readlineSync.question('Your answer: ');
};

// основная функция для экспорта логики игры brain-even
const checkEven = () => {
  console.log('Welcome to the Brain Games!');
  getUserNameHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    showNum();
    getAnswerFromTheUser();
    const correctAnswer = 'Correct!';
    const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${outputTextforEven}'.`;
    const variable = answer === outputTextforEven ? correctAnswer : wrongAnswer;
    if (variable !== correctAnswer) {
      console.log(wrongAnswer);
      return;
    }
    console.log(correctAnswer);
  }
  console.log(`Congratulations, ${userName}!`);
};

export default checkEven;
