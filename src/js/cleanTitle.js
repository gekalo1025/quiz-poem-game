import imageStub from "../assets/images/image-stub.jpg";
import { currentQuestionPlayer } from "../pages/quiz-poems/quiz-poems";

const authorDescriptionImg = document.querySelector("#author-description-img");
const authorDescriptionTitle = document.querySelector(
  "#author-description-title"
);
const authorDescriptionText = document.getElementById(
  "author-description__text"
);
const currentQuestionImg = document.getElementById("current-question-img");

const currentQuestionTitle = document.getElementById("current-question-title");
const authorDescriptionStub = document.querySelector(
  ".author-description__stub"
);

export default function cleanTitle() {
  currentQuestionPlayer.showCurrentAudioDuration(true);
  currentQuestionPlayer.showAudioDuration(true);
  if (currentQuestionPlayer.isPlay === true) {
    currentQuestionPlayer.playAudio();
    currentQuestionPlayer.toggleBtn();
  }
  authorDescriptionImg.src = imageStub;
  currentQuestionImg.src = imageStub;
  authorDescriptionTitle.textContent = "*****";
  currentQuestionTitle.textContent = "*******";
  authorDescriptionText.textContent = "";
  authorDescriptionStub.style.display = "block";
}
