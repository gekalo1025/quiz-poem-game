import "../../stylesheets/main.scss";
import choiceQuestion from "../../js/choiceQuestion";
import showAuthorDescription from "../../js/showAuthorDescription";
export const settingGame = {
  currentQuestion: null,
  categoryGame: null,
  numberWrongAnswer: 0,
  score: 0,
  numberQuestionComplite: 0,
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
export const currentQuestionPlayer = new CurrentQuestionPlayer(
  currentQuestionAudio,
  currentQuestionPlayBtn,
  currentTime,
  maxTime,
  timebarLine
);

//////////////////////////
const headerLogoAll = document.querySelectorAll(".header__logo");
headerLogoAll[1].addEventListener("click", () => {
  location.reload();
  // currentQuestionPlayer.showCurrentAudioDuration(true);
  // currentQuestionPlayer.showAudioDuration(true);
  // if (currentQuestionPlayer.isPlay === true) {
  //   currentQuestionPlayer.playAudio();
  //   currentQuestionPlayer.toggleBtn();
  // }
  // toggleHiddenBody();
});

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

////////////////////////
const answersOptions = document.querySelector(".answers__options");
const scorePointsAll = document.querySelectorAll(".score__points");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const authorDescriptionStub = document.querySelector(
  ".author-description__stub"
);

const navQuestionAll = document.querySelector(
  ".body-quiz-poems .header__nav"
).children;

answersOptions.addEventListener("click", (element) => {
  const maxPointAnswer = 5;
  authorDescriptionStub.style.display = "none";

  if (element.target.textContent === settingGame.currentQuestion.nameAuthor) {
    navQuestionAll[settingGame.numberQuestionComplite].classList.add(
      "complite"
    );
    nextQuestionBtn.disabled = false;

    showAuthorDescription(element.target.textContent, "correct");
    showAuthorDescription(element.target.textContent, "wrong");
    element.target.classList.add("correct-answer");
    settingGame.score += maxPointAnswer - settingGame.numberWrongAnswer;
    scorePointsAll[0].textContent = settingGame.score;
    scorePointsAll[1].textContent = settingGame.score;
    settingGame.numberWrongAnswer = 0;
    element.target.style.pointerEvents = "none";
  } else {
    showAuthorDescription(element.target.textContent, "wrong");
    element.target.classList.add("wrong-answer");
    settingGame.numberWrongAnswer++;
  }
});

nextQuestionBtn.addEventListener("click", () => {
  nextQuestionBtn.disabled = true;
  settingGame.numberQuestionComplite++;
  settingGame.currentQuestion = choiceQuestion(settingGame.categoryGame);
  startGame();
});
