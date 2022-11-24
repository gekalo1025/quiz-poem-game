import "../../stylesheets/main.scss";
import choiceQuestion from "../../js/choiceQuestion";
import showAuthorDescription from "../../js/showAuthorDescription";
import audioError1 from "../../assets/audio/zvuk-nepravilnogo-otveta1-2.mp3";
import audioError2 from "../../assets/audio/zvuk-nepravilnogo-otveta2-2.mp3";
import audioCorrect from "../../assets/audio/zvuk-pravilnogo-otveta.mp3";
import imgPlay from "../../assets/icons/play.svg";
export const settingGame = {
  currentQuestion: null,
  categoryGame: null,
  numberWrongAnswer: null,
  score: 0,
  numberQuestionComplite: 0,
  passedQuestions: [],
  counterClickError: 0,
  language: "ru",
  arrErrorAnswer: [],
};

import startGame from "../../js/startGame";
import upScroll from "../../js/upScroll";
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
import toggleLanguage from "../../js/toggleLanguage";
import { setLocalStorage } from "../../js/setLocalStorage";
import { getLocalStorage } from "../../js/getLocalStorage";
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
  document.querySelector(".current-question__player .player__play img"),
  currentTime,
  maxTime,
  timebarLine,
  currentQuestionVolumeSlider,
  currentQuestionMuteButton
);

export const authorDescriptionPlayer = new AuthorDescriptionPlayer(
  authorDescriptionAudio,
  document.querySelector(".author-description__player .player__play img"),
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

function playCurrentQuestionAudio() {
  if (authorDescriptionPlayer.isPlay) {
    authorDescriptionPlayer.playAudio();
    authorDescriptionPlayer.toggleBtn();
  }
  currentQuestionPlayer.playAudio();
  currentQuestionPlayer.toggleBtn();
  currentQuestionPlayer.showAudioDuration();
}

currentQuestionAudio.addEventListener("ended", () => {
  currentQuestionPlayer.isPlay = false;
  currentQuestionPlayer.toggleBtn();
});

timebarLine.addEventListener("change", () => {
  currentQuestionPlayer.audioRewind();
});

////////////////////////

authorDescriptionPlayBtn.addEventListener("click", () => {
  if (currentQuestionPlayer.isPlay) {
    currentQuestionPlayer.playAudio();
    currentQuestionPlayer.toggleBtn();
  }

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
  const audioErrorArr = [audioError1, audioError2];
  const maxPointAnswer = 5;
  authorDescriptionStub.style.display = "none";
  const audioErr = new Audio(audioErrorArr[settingGame.counterClickError]);
  const audioСor = new Audio(audioCorrect);
  if (
    element.target.textContent ===
      settingGame.currentQuestion[settingGame.language].nameAuthor &&
    nextQuestionBtn.getAttribute("disabled") !== null
  ) {
    settingGame.arrErrorAnswer = [];
    audioСor.play();

    if (currentQuestionPlayer.isPlay) {
      currentQuestionPlayer.playAudio();
      currentQuestionPlayer.toggleBtn();
      authorDescriptionPlayer.showAudioDuration(true);
    }

    nextQuestionBtn.disabled = false;
    showAuthorDescription(element.target.textContent, "correct");
    showAuthorDescription(element.target.textContent, "wrong");
    element.target.classList.add("correct-answer");
    settingGame.score += maxPointAnswer - settingGame.numberWrongAnswer;
    document.querySelector(".body-quiz-poems .score__points").textContent =
      settingGame.score;
    document.querySelector(".body-results .score__points").textContent =
      settingGame.score;
    settingGame.numberWrongAnswer = 0;
  }
  if (nextQuestionBtn.getAttribute("disabled") === null) {
    authorDescriptionPlayer.showAudioDuration(true);
    showAuthorDescription(element.target.textContent, "wrong");
    authorDescriptionPlayer.isPlay = false;
    authorDescriptionPlayer.toggleBtn();
  } else {
    authorDescriptionPlayer.showAudioDuration(true);
    audioErr.play();
    if (settingGame.counterClickError === 1) {
      settingGame.counterClickError = 0;
    } else {
      settingGame.counterClickError++;
    }
    showAuthorDescription(element.target.textContent, "wrong");
    element.target.classList.add("wrong-answer");

    authorDescriptionPlayer.isPlay = false;
    authorDescriptionPlayer.toggleBtn();

    if (!settingGame.arrErrorAnswer.includes(element.target.textContent)) {
      settingGame.arrErrorAnswer.push(element.target.textContent);
      settingGame.numberWrongAnswer++;
    }
  }
});

navQuestionAll[settingGame.numberQuestionComplite].classList.add("current");

nextQuestionBtn.addEventListener("click", () => {
  upScroll();

  if (currentQuestionPlayer.isPlay) {
    currentQuestionPlayer.playAudio();
    currentQuestionPlayer.toggleBtn();
  }
  if (authorDescriptionPlayer.isPlay) {
    authorDescriptionPlayer.playAudio();
    authorDescriptionPlayer.toggleBtn();
  }

  if (settingGame.numberQuestionComplite === 9) {
    document.querySelector(".body-quiz-poems").classList.add("hidden");
    document.querySelector(".body-results").classList.remove("hidden");
    if (settingGame.score >= 50) {
      if (settingGame.language === "ru") {
        document.querySelector(
          ".result__text"
        ).innerHTML = `Поздравляем! Вы победили в викторине набрав максимальное количество
        баллов! <a href="./quiz-poems.html" class="result__btn"> Желаете сыграть еще ?</a>`;
      } else {
        document.querySelector(
          ".result__text"
        ).innerHTML = `Congratulations! You won the quiz with the highest score! <a href="./quiz-poems.html" class="result__btn"> Play again ?</a>`;
      }
    }
    document.querySelector(".result__current-score").textContent =
      settingGame.score;
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
    if (settingGame.language === "ru") {
      nextQuestionBtn.textContent = "Показать результаты";
    } else {
      nextQuestionBtn.textContent = "Show results";
    }
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
showScrollArrow();

document
  .querySelector(".body-start-game .language-btn")
  .addEventListener("click", toggleLanguage);
document
  .querySelector(".body-quiz-poems .language-btn")
  .addEventListener("click", toggleLanguage);
document
  .querySelector(".body-results .language-btn")
  .addEventListener("click", toggleLanguage);

window.addEventListener("beforeunload", setLocalStorage);

window.addEventListener("load", getLocalStorage);

currentQuestionAudio.addEventListener("loadeddata", () => {
  currentQuestionPlayer.btnPlay.src = imgPlay;
  currentQuestionPlayBtn.addEventListener("click", playCurrentQuestionAudio);
});

authorDescriptionAudio.addEventListener("loadeddata", () => {
  authorDescriptionAudio.btnPlay.src = imgPlay;
});
