import "../../stylesheets/main.scss";
import choiceQuestion from "../../js/choiceQuestion";
export const settingGame = {
  currentQuestion: null,
  categoryGame: null,
};

import startGame from "../../js/startGame";
import toggleHiddenBody from "../../js/toggleHiddenBody";
import {
  CurrentQuestionPlayer,
  AuthorDescriptionPlayer,
} from "../../js/player";

export const currentQuestionAudio = document.getElementById(
  "current-question-audio"
);

////////// create player ...
const currentQuestionPlayBtn = document.querySelector(
  ".current-question__player .player__play"
);
const currentTime = document.querySelector(
  ".current-question__player .timebar-current-time"
);
const maxTime = document.querySelector(
  ".current-question__player .timebar-max-time"
);
const timebarLine = document.querySelector(
  ".current-question__player .timebar__line"
);
const currentQuestionPlayer = new CurrentQuestionPlayer(
  currentQuestionAudio,
  currentQuestionPlayBtn,
  currentTime,
  maxTime,
  timebarLine
);

//////////////////////////
const headerLogoAll = document.querySelectorAll(".header__logo");
headerLogoAll[1].addEventListener("click", toggleHiddenBody);

const category = document.querySelector(".header__nav");
category.addEventListener("click", (element) => {
  settingGame.categoryGame = element.target.id;
  settingGame.currentQuestion = choiceQuestion(element.target.id);
  startGame();
  toggleHiddenBody();
});
currentQuestionPlayBtn.addEventListener("click", () => {
  currentQuestionPlayer.playAudio();
  currentQuestionPlayer.toggleBtn();
  currentQuestionPlayer.showAudioDuration();
});
currentQuestionAudio.addEventListener("ended", () => {
  currentQuestionPlayer.isPlay = false;
  currentQuestionPlayer.toggleBtn();
});

timebarLine.addEventListener("change", () => {
  currentQuestionPlayer.audioRewind();
});
