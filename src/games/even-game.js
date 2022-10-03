import engineFunction from '../index.js';

const getDataforGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const valueForQuestion = Math.floor(Math.random() * 101);
  const expectedResponse = (valueForQuestion % 2 === 0) ? 'yes' : 'no';

  return [rule, valueForQuestion, expectedResponse];
};

export default () => engineFunction(getDataforGame);
