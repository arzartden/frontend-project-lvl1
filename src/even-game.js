import readlineSync from 'readline-sync';

export const getRandomIntInclusive = (min, max) => {
  const numMin = Math.ceil(min);
  const numMax = Math.floor(max);
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
};

export const checkEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let choiceNumUser;
  let answer;
  const getAnswer = () => {
    choiceNumUser = getRandomIntInclusive(1, 100);
    console.log(`Question: ${choiceNumUser}`);
    answer = readlineSync.question('Your answer: ');
  };
  getAnswer();
  let result = 0;
  while (result < 2) {
    if (answer === 'yes' && choiceNumUser % 2 === 0) {
      console.log('Correct!');
      result += 1;
      getAnswer();
    } else if (answer === 'no' && choiceNumUser % 2 !== 0) {
      console.log('Correct!');
      result += 1;
      getAnswer();
    } else if (answer === 'yes' && choiceNumUser % 2 !== 0) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name}!`);
      return;
    } else if (answer === 'no' && choiceNumUser % 2 === 0) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name}!`);
      return;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
