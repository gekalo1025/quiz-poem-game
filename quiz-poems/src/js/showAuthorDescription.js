import { poetryBiography } from "../js/paetryBiography";
import {
  authorDescriptionPlayer,
  settingGame,
} from "../pages/quiz-poems/quiz-poems";
import getRandomIntInclusive from "./getRandomIntInclusive";
import poetryData from "./poetryCategories";
export const authorDescriptionAudio = document.getElementById("author-audio");

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
  let arrPoemsAudio = poetryData.filter((item) => {
    if (
      item.nameAuthor === nameAuthor &&
      item.title !== settingGame.currentQuestion.title
    ) {
      return true;
    } else {
      return false;
    }
  });

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
  authorDescriptionAudio.src = `${
    arrPoemsAudio[getRandomIntInclusive(0, arrPoemsAudio.length - 1)].srcAudio
  }`;
  authorDescriptionPlayer.showAudioDuration(true);
  authorDescriptionPlayer.showCurrentAudioDuration(true);
}
