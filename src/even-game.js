import readlineSync from 'readline-sync';

let userName;
let shownNumber;
let userAnswer;

// начальная функция для вывода приветствия и получения имени пользователя
const getUserNameHello = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

// функция для получения случайного целого числа из интвервала включительно
const getRandomIntInclusive = (min, max) => {
  const numMin = Math.ceil(min);
  const numMax = Math.floor(max);
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
};

// функция для вывода числа пользователю и получения ответа пользователя
const getAnswer = () => {
  shownNumber = getRandomIntInclusive(1, 100);
  console.log(`Question: ${shownNumber}`);
  userAnswer = readlineSync.question('Your answer: ');
};

// основная функция для экспорта логики игры brain-even
const checkEven = () => {
  getUserNameHello();
  for (let i = 1; i <= 3; i += 1) {
    getAnswer();
    if (shownNumber % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (shownNumber % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else if (shownNumber % 2 === 0 && userAnswer !== 'yes') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${userName}!`);
      return;
    } else if (shownNumber % 2 !== 0 && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default checkEven;
