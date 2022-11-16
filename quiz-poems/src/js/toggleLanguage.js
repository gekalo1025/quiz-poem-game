import { settingGame } from "../pages/quiz-poems/quiz-poems";
import startGame from "./startGame";
const languageBtn = document.querySelectorAll(".language-btn img");
import flagRussia from "../assets/icons/russian-federation.png";
import flagEngland from "../assets/icons/great-britain.png";
import { setLocalStorage } from "./setLocalStorage";

export default function toggleLanguage() {
  if (settingGame.language === "ru") {
    settingGame.language = "en";
    languageBtn.forEach((item) => (item.src = flagRussia));
  } else {
    languageBtn.forEach((item) => (item.src = flagEngland));
    settingGame.language = "ru";
  }

  const classicism = document.getElementById("classicism");
  const romanticism = document.getElementById("romanticism");
  const modernism = document.getElementById("modernism");
  const greetingText = document.querySelector(".greeting__text");

  const stubText = document.querySelector(".stub__text");
  const nextquestionBtn = document.querySelector(".next-question-btn");
  const authorDescriptionBtn = document.querySelector(
    ".author-description__btn"
  );

  const resultText = document.querySelector(".result__text");
  const resultCurrentScore = document.querySelector(".result__current-score");
  const resultNewGameBtn = document.querySelector(".result__text a");

  const allYearCreation = document.querySelectorAll(".year-creation");
  const allScoreTitle = document.querySelectorAll(".score__title");

  if (settingGame.language === "en") {
    classicism.textContent = "Classicism";
    romanticism.textContent = "Romanticism";
    modernism.textContent = "Modernism";
    greetingText.textContent = "Select a category to start playing";

    stubText.textContent = "Listen to the poem and choose the author";
    nextquestionBtn.innerHTML = `Next question <img src="images/cbdd1ee76b73ae4dd261.svg" alt="next question">`;
    authorDescriptionBtn.textContent = "Read more";

    resultText.innerHTML = `Congratulations! Yoy complited the quiz with
   <span class="result__current-score">${settingGame.score}</span> out of 50 points!
   <br />
   <a href="./quiz-poems.html" class="result__btn"
     >Play again ?</a
   >`;

    allYearCreation.forEach((item) => (item.textContent = "2022 year"));
    allScoreTitle.forEach(
      (item) =>
        (item.innerHTML = `Score: <span id="score-points" class="score__points">${settingGame.score}</span>`)
    );
  } else {
    classicism.textContent = "Классицизм";
    romanticism.textContent = "Романтизм";
    modernism.textContent = "Модернизм";
    greetingText.textContent = "Чтобы начать игру выберите категорию";

    stubText.textContent = "Прослушайте стихотворение и выберите автора";
    nextquestionBtn.innerHTML = `Следующий вопрос <img src="images/cbdd1ee76b73ae4dd261.svg" alt="next question">`;
    authorDescriptionBtn.textContent = "Читать далее";

    resultText.innerHTML = `Поздравляем! Вы закончили викторину набрав
   <span class="result__current-score">${settingGame.score}</span> из 50 баллов!
   <br />
   <a href="./quiz-poems.html" class="result__btn"
     >Желаете сыграть еще ?</a
   >`;

    allYearCreation.forEach((item) => (item.textContent = "2022 год"));
    allScoreTitle.forEach(
      (item) =>
        (item.innerHTML = `Баллы:
        <span id="score-points" class="score__points">${settingGame.score}</span>`)
    );
  }
  setLocalStorage();

  if (
    !document.querySelector(".body-quiz-poems").classList.contains("hidden")
  ) {
    startGame();
  }
}
