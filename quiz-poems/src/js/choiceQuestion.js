import poetryData from "./poetry-categories";
import getRandomIntInclusive from "./getRandomIntInclusive";

function choiceQuestion(category) {
  let filterArr = poetryData.filter((item) => item.categoryPoetry == category);
  return filterArr[getRandomIntInclusive(0, filterArr.length - 1)];
}

export default choiceQuestion;
