import poetryData from "./poetryCategories";

function choiceAnswer(category) {
  let filterArr = poetryData.filter((item) => item.categoryPoetry == category);

  let filterArrNoDuplicates = new Set();
  filterArr.forEach((element) => {
    filterArrNoDuplicates.add(element.nameAuthor);
  });
  return [...filterArrNoDuplicates];
}

export default choiceAnswer;
