import { settingGame } from "../pages/quiz-poems/quiz-poems";
import poetryData from "../data/poetryCategories";

function choiceAnswer(category) {
  let filterArr = poetryData.filter((item) => item.categoryPoetry == category);
  let filterArrNoDuplicate = new Set();

  filterArr.forEach((element) => {
    filterArrNoDuplicate.add(element[settingGame.language].nameAuthor);
  });

  return [...filterArrNoDuplicate];
}

export default choiceAnswer;
