import { settingGame } from "../pages/quiz-poems/quiz-poems";
import poetryData from "./poetryCategories";

function choiceAnswer(category) {
  let filterArr = poetryData.filter((item) => item.categoryPoetry == category);
  let filterArrNoDuplicates = new Set();
  filterArr.forEach((element) => {
    filterArrNoDuplicates.add(element[settingGame.language].nameAuthor);
  });
  return [...filterArrNoDuplicates];
}

export default choiceAnswer;
