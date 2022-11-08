import getRandomIntInclusive from "./getRandomIntInclusive";
import { settingGame } from "../pages/quiz-poems/quiz-poems";
import isCorrectAnswerInList from "./isСorrectAnswerInList";
const answersOptions = document.querySelector(".answers__options");

export default function addAnswersOptions(arrAnswers, quantity) {
  const correctAuthor = settingGame.currentQuestion.nameAuthor;
  answersOptions.innerHTML = "";

  for (let i = 0; i < quantity; i++) {
    const newAnswer = document.createElement("div");
    const span = document.createElement("span");

    newAnswer.classList.add("answer");

    newAnswer.textContent = arrAnswers.splice(
      getRandomIntInclusive(0, arrAnswers.length - 1),
      1
    )[0];

    newAnswer.appendChild(span);
    answersOptions.appendChild(newAnswer);
  }

  const allAnswer = answersOptions.children;

  if (!isCorrectAnswerInList(allAnswer, correctAuthor)) {
    allAnswer[getRandomIntInclusive(0, allAnswer.length - 1)].textContent =
      correctAuthor;
  }
}
