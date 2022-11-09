import { poetryBiography } from "../js/paetryBiography";
import { settingGame } from "../pages/quiz-poems/quiz-poems";

const authorDescriptionImg = document.querySelector("#author-description-img");
const authorDescriptionTitle = document.querySelector(
  "#author-description-title"
);
const authorDescriptionText = document.getElementById(
  "author-description__text"
);
const currentQuestionImg = document.getElementById("current-question-img");
const currentQuestionTitle = document.getElementById("current-question-title");

export default function showAuthorDescription(nameAuthor, resultAnswer) {
  if (resultAnswer === "wrong") {
    poetryBiography.forEach((item) => {
      if (item.nameAuthor == nameAuthor) {
        authorDescriptionImg.src = item.photo;
        authorDescriptionTitle.textContent = item.nameAuthor;
        authorDescriptionText.textContent = item.biography;
      }
    });
  }
  if (resultAnswer === "correct") {
    poetryBiography.forEach((item) => {
      if (item.nameAuthor == nameAuthor) {
        currentQuestionImg.src = item.photo;
        currentQuestionTitle.innerText =
          item.nameAuthor + "\n" + `"${settingGame.currentQuestion.title}"`;
      }
    });
  }
}
