import readlineSync from 'readline-sync';

let userName;
let randomNum;

// начальная функция для вывода приветствия и получения имени пользователя
const getUserNameHello = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

// функция для получения случайного целого числа из интвервала включительно
const getRandomNumber = (min, max) => {
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

// функция для вывода числа пользователю
const showNum = () => {
  randomNum = getRandomNumber(1, 100);
  console.log(`Question: ${randomNum}`);
};

// основная функция для экспорта логики игры brain-even
const checkEven = () => {
  getUserNameHello();
  for (let i = 1; i <= 3; i += 1) {
    showNum();
    const outputTextforEven = (randomNum % 2 === 0) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = 'Correct!';
    const wrongAnswer = `'${answer}' is wrong answer ;(. Correct answer was '${outputTextforEven}'.`;
    const variable = answer === outputTextforEven ? correctAnswer : wrongAnswer;
    if (variable === correctAnswer) {
      console.log(correctAnswer);
    } else {
      console.log(wrongAnswer);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default checkEven;
