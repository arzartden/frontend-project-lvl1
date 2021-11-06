import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  const numMin = Math.ceil(min);
  const numMax = Math.floor(max);
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
};

const checkEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const choiceNumUser = getRandomIntInclusive(1, 100);
    console.log(`Question: ${choiceNumUser}`);
    const answer = readlineSync.question('Your answer: ');
    if (choiceNumUser % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name}!`);
        return;
      }
    }
    if (choiceNumUser % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default checkEven;
