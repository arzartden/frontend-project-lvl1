import engineFunction from '../index.js';

const getProgression = () => {
  const randomProgressionLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const randomStepProgression = Math.floor(Math.random() * 10) + 1;
  let randomElementProgression = Math.floor(Math.random() * 101);
  const progression = [];

  for (let i = 0; i < randomProgressionLength; i += 1) {
    progression[i] = randomElementProgression;
    randomElementProgression += randomStepProgression;
  }

  return progression;
};

const getDataForGame = () => {
  const rule = 'What number is missing in the progression?';
  const progression = getProgression();
  const numHiddenElement = Math.floor(Math.random() * progression.length);
  const expectedResponse = String(progression[numHiddenElement]);
  progression[numHiddenElement] = '..';

  const valueForQuestion = progression.join(' ');

  return [rule, valueForQuestion, expectedResponse];
};

export default () => engineFunction(getDataForGame);
