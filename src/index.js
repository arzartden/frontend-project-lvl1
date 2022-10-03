import readlineSync from 'readline-sync';

const engineFunction = (gameData) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const [rule] = gameData();
  console.log(rule);

  for (let i = 1; i <= 3; i += 1) {
    const [, question, expectedResponse] = gameData();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== expectedResponse) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedResponse}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default engineFunction;
