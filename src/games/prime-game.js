import engineFunction from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getDataForGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomNum = Math.floor(Math.random() * 200) + 1;
  const valueForQuestion = String(randomNum);
  const expectedResponse = isPrime(randomNum) ? 'yes' : 'no';

  return [rule, valueForQuestion, expectedResponse];
};

export default () => engineFunction(getDataForGame);
