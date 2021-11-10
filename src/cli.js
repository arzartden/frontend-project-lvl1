import readlineSync from 'readline-sync';

const getNameForHello = (questionToTheUser) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question(questionToTheUser);
  console.log(`Hello, ${name}!`);
};

export default getNameForHello;
