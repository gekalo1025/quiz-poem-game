import poetryData from "../data/poetryCategories";
import getRandomIntInclusive from "./getRandomIntInclusive";
import { settingGame } from "../pages/quiz-poems/quiz-poems";

function choiceQuestion(category) {
  let filterArr = poetryData.filter((item) => item.categoryPoetry == category);
  let currentQuestion = filterArr[getRandomIntInclusive(0, filterArr.length - 1)];

  while (settingGame.passedQuestions.includes(currentQuestion)) {
    currentQuestion = filterArr[getRandomIntInclusive(0, filterArr.length - 1)];
  }
  return currentQuestion;
}

export default choiceQuestion;
