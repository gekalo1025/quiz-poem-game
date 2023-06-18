import { poetryBiography } from "../js/paetryBiography";
import {
  authorDescriptionPlayer,
  settingGame,
} from "../pages/quiz-poems/quiz-poems";
import getRandomIntInclusive from "./getRandomIntInclusive";
import poetryData from "./poetryCategories";
export const authorDescriptionAudio = document.getElementById("author-audio");

const authorDescriptionBtn = document.querySelector(".author-description__btn");
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
      item[settingGame.language].nameAuthor === nameAuthor &&
      item[settingGame.language].title !==
        settingGame.currentQuestion[settingGame.language].title
    ) {
      return true;
    } else {
      return false;
    }
  });

  if (resultAnswer === "wrong") {
    poetryBiography.forEach((item) => {
      if (item[settingGame.language].nameAuthor == nameAuthor) {
        authorDescriptionImg.src = item.photo;
        authorDescriptionTitle.textContent =
          item[settingGame.language].nameAuthor;
        authorDescriptionText.textContent =
          item[settingGame.language].biography;
        authorDescriptionBtn.setAttribute(
          "onclick",
          `window.open('${item[settingGame.language].linkWiki}', '_blank')`
        );
      }
    });
  }
  if (resultAnswer === "correct") {
    poetryBiography.forEach((item) => {
      if (item[settingGame.language].nameAuthor == nameAuthor) {
        currentQuestionImg.src = item.photo;
        currentQuestionTitle.innerText =
          item[settingGame.language].nameAuthor +
          "\n" +
          `"${settingGame.currentQuestion[settingGame.language].title}"`;
      }
    });
  }
  authorDescriptionAudio.src = `${
    arrPoemsAudio[getRandomIntInclusive(0, arrPoemsAudio.length - 1)].srcAudio
  }`;
  authorDescriptionPlayer.showAudioDuration(true);
  authorDescriptionPlayer.showCurrentAudioDuration(true);
}
