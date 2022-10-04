import engineFunction from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return String(gcd(b, a % b));
};

const getDataForGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const randomNum1 = Math.floor(Math.random() * 101);
  const randomNum2 = Math.floor(Math.random() * 101);
  const valueForQuestion = `${randomNum1} ${randomNum2}`;
  const expectedResponse = gcd(randomNum1, randomNum2);

  return [rule, valueForQuestion, expectedResponse];
};

export default () => engineFunction(getDataForGame);
