import readlineSync from 'readline-sync';

// имя пользователя
let userName;
// ответпользователя
let answer;
// текстовое значение(yes or no) для четности/нечетности показанного числа (для сравнения)
let expectedResponse;

// функция для получения имени пользователя
const getUserNameHello = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// функция для получения случайного целого числа из интвервала включительно
const getRandomNumber = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

// функция для вывода числа пользователю
const showNum = () => {
  const randomNum = getRandomNumber(1, 100);
  expectedResponse = (randomNum % 2 === 0) ? 'yes' : 'no';
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

export default checkEven;
