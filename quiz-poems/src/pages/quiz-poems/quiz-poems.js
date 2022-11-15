import "../../stylesheets/main.scss";
import choiceQuestion from "../../js/choiceQuestion";
import showAuthorDescription from "../../js/showAuthorDescription";
import audioError from "../../assets/audio/zvuk-nepravilnogo-otveta.mp3";
import audioCorrect from "../../assets/audio/zvuk-pravilnogo-otveta.mp3";
export const settingGame = {
  currentQuestion: null,
  categoryGame: null,
  numberWrongAnswer: null,
  score: 0,
  numberQuestionComplite: 0,
  passedQuestions: [],
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
import { authorDescriptionAudio } from "../../js/showAuthorDescription";
import showScrollArrow from "../../js/showScrollArrow";
// export const authorDescriptionAudio = document.getElementById("author-audio");

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
const currentQuestionVolumeSlider = document.querySelector(
  ".current-question__player .volume__input"
);
const currentQuestionMuteButton = document.querySelector(
  ".current-question__player .volume__img"
);

const authorDescriptionPlayBtn = document.querySelector(
  ".author-description__player .player__play"
);
const authorDescriptionCurrentTime = document.querySelector(
  ".author-description__player .timebar-current-time"
);
const authorDescriptionMaxTime = document.querySelector(
  ".author-description__player .timebar-max-time"
);
const authorDescriptionTimebarLine = document.querySelector(
  ".author-description__player .timebar__line"
);
const authorDescriptionVolumeSlider = document.querySelector(
  ".author-description__player .volume__input"
);
const authorDescriptionMuteButton = document.querySelector(
  ".author-description__player .volume__img"
);

export const currentQuestionPlayer = new CurrentQuestionPlayer(
  currentQuestionAudio,
  currentQuestionPlayBtn,
  currentTime,
  maxTime,
  timebarLine,
  currentQuestionVolumeSlider,
  currentQuestionMuteButton
);
export const authorDescriptionPlayer = new AuthorDescriptionPlayer(
  authorDescriptionAudio,
  authorDescriptionPlayBtn,
  authorDescriptionCurrentTime,
  authorDescriptionMaxTime,
  authorDescriptionTimebarLine,
  authorDescriptionVolumeSlider,
  authorDescriptionMuteButton
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
headerLogoAll[2].addEventListener("click", () => {
  location.reload();
});

const category = document.querySelector(".header__nav");
category.addEventListener("click", (element) => {
  settingGame.categoryGame = element.target.id;
  settingGame.currentQuestion = choiceQuestion(element.target.id);
  settingGame.passedQuestions.push(settingGame.currentQuestion);
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
authorDescriptionPlayBtn.addEventListener("click", () => {
  authorDescriptionPlayer.playAudio();
  authorDescriptionPlayer.toggleBtn();
  authorDescriptionPlayer.showAudioDuration();
});
authorDescriptionAudio.addEventListener("ended", () => {
  authorDescriptionPlayer.isPlay = false;
  authorDescriptionPlayer.toggleBtn();
});

authorDescriptionTimebarLine.addEventListener("change", () => {
  authorDescriptionPlayer.audioRewind();
});
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
  const audioErr = new Audio(audioError);
  const audioСor = new Audio(audioCorrect);
  audioErr.volume = 0.2;
  audioСor.volume = 0.2;
  if (element.target.textContent === settingGame.currentQuestion.nameAuthor) {
    audioСor.play();
    currentQuestionPlayer.playAudio();
    currentQuestionPlayer.toggleBtn();
    nextQuestionBtn.disabled = false;
    showAuthorDescription(element.target.textContent, "correct");
    showAuthorDescription(element.target.textContent, "wrong");
    element.target.classList.add("correct-answer");
    settingGame.score += maxPointAnswer - settingGame.numberWrongAnswer;
    scorePointsAll[0].textContent = settingGame.score;
    scorePointsAll[1].textContent = settingGame.score;
    scorePointsAll[2].textContent = settingGame.score;
    settingGame.numberWrongAnswer = 0;
    element.target.style.pointerEvents = "none";
  }
  if (nextQuestionBtn.getAttribute("disabled") === null) {
    showAuthorDescription(element.target.textContent, "wrong");
    authorDescriptionPlayer.isPlay = false;
    authorDescriptionPlayer.toggleBtn();
  } else {
    audioErr.play();
    showAuthorDescription(element.target.textContent, "wrong");
    element.target.classList.add("wrong-answer");
    settingGame.numberWrongAnswer++;

    authorDescriptionPlayer.isPlay = false;
    authorDescriptionPlayer.toggleBtn();
  }
});

navQuestionAll[settingGame.numberQuestionComplite].classList.add("current");

nextQuestionBtn.addEventListener("click", () => {
  // magic  number - amount question
  if (settingGame.numberQuestionComplite === 9) {
    document.querySelector(".body-quiz-poems").classList.add("hidden");
    document.querySelector(".body-results").classList.remove("hidden");
    if (settingGame.score >= 50) {
      document.querySelector(
        ".result__text"
      ).innerHTML = `Поздравляем! Вы победили в викторине набрав максимальное количество
        баллов! <a href="./quiz-poems.html" class="result__btn"> Желаете сыграть еще ?</a>`;
    }
    document.querySelector(".result__current-score").textContent =
      settingGame.score;
    if (currentQuestionPlayer.isPlay) {
      currentQuestionPlayer.playAudio();
    }
    if (authorDescriptionPlayer.isPlay) {
      authorDescriptionPlayer.playAudio();
    }
  }
  if (settingGame.numberQuestionComplite < 9) {
    navQuestionAll[settingGame.numberQuestionComplite].classList.remove(
      "current"
    );
    navQuestionAll[settingGame.numberQuestionComplite + 1].classList.add(
      "current"
    );
    settingGame.numberQuestionComplite++;
    nextQuestionBtn.disabled = true;
    settingGame.currentQuestion = choiceQuestion(settingGame.categoryGame);
    settingGame.passedQuestions.push(settingGame.currentQuestion);
    navQuestionAll[settingGame.numberQuestionComplite - 1].classList.add(
      "complite"
    );
    startGame();
  }
  if (settingGame.numberQuestionComplite === 9) {
    nextQuestionBtn.textContent = "Show result";
  }
});

const volumeInputCurrentQuestion = document.querySelector(
  ".current-question__player .volume__input"
);
const volumeInputAuthorDescriptionPlayer = document.querySelector(
  ".author-description__player .volume__input"
);

volumeInputCurrentQuestion.addEventListener("input", () => {
  currentQuestionPlayer.setVolume();
});
volumeInputAuthorDescriptionPlayer.addEventListener("input", () => {
  authorDescriptionPlayer.setVolume();
});

authorDescriptionMuteButton.addEventListener("click", () => {
  authorDescriptionMuteButton.classList.toggle("mute");
  if (authorDescriptionMuteButton.classList.contains("mute")) {
    authorDescriptionVolumeSlider.value = "0";
  } else {
    authorDescriptionVolumeSlider.value = "0.5";
  }
  authorDescriptionPlayer.setVolume();
});
currentQuestionMuteButton.addEventListener("click", () => {
  currentQuestionMuteButton.classList.toggle("mute");
  if (currentQuestionMuteButton.classList.contains("mute")) {
    currentQuestionVolumeSlider.value = "0";
  } else {
    currentQuestionVolumeSlider.value = "0.5";
  }
  currentQuestionPlayer.setVolume();
});

document.addEventListener("scroll", showScrollArrow);
