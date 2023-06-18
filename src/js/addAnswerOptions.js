import getRandomIntInclusive from "./getRandomIntInclusive";
import { settingGame } from "../pages/quiz-poems/quiz-poems";
import isCorrectAnswerInList from "./isСorrectAnswerInList";
import { answersOptions } from "./const";

export default function addAnswersOptions(arrAnswers, quality) {
  const correctAuthor = settingGame.currentQuestion[settingGame.language].nameAuthor;
  answersOptions.innerHTML = "";

  for (let i = 0; i < quality; i++) {
    const newAnswer = document.createElement("div");
    const span = document.createElement("span");

    newAnswer.classList.add("answer");

    newAnswer.textContent = arrAnswers.splice(getRandomIntInclusive(0, arrAnswers.length - 1), 1)[0];

    newAnswer.appendChild(span);
    answersOptions.appendChild(newAnswer);
  }

  const allAnswer = answersOptions.children;

  if (!isCorrectAnswerInList(allAnswer, correctAuthor)) {
    allAnswer[getRandomIntInclusive(0, allAnswer.length - 1)].textContent = correctAuthor;
  }
}
