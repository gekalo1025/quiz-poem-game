import imageStub from "../assets/images/image-stub.jpg";
import { currentQuestionPlayer } from "../pages/quiz-poems/quiz-poems";
import { authorDescriptionImg, authorDescriptionTitle, authorDescriptionText, currentQuestionImg, currentQuestionTitle, authorDescriptionStub } from "./const";

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
