import { settingGame } from "../pages/quiz-poems/quiz-poems";
import startGame from "./startGame";
import { languageBtn, classicism, romanticism, modernism, greetingText, stubText, nextquestionBtn, resultText, authorDescriptionBtn, galeryPoemsLink, allScoreTitle, allYearCreation } from "./const";
import flagRussia from "../assets/icons/russian-federation.png";
import flagEngland from "../assets/icons/great-britain.png";
import { setLocalStorage } from "./setLocalStorage";
import poetryData from "../data/poetryCategories";

export default function toggleLanguage() {
  if (settingGame.language === "ru") {
    settingGame.language = "en";
    languageBtn.forEach((item) => (item.src = flagRussia));
  } else {
    languageBtn.forEach((item) => (item.src = flagEngland));
    settingGame.language = "ru";
  }

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

    galeryPoemsLink.forEach((item) => (item.innerHTML = `Poetry gallery(${poetryData.length} verses)`));
    allYearCreation.forEach((item) => (item.textContent = "2022 year"));
    allScoreTitle.forEach((item) => (item.innerHTML = `Score: <span id="score-points" class="score__points">${settingGame.score}</span>`));
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
    galeryPoemsLink.forEach((item) => (item.innerHTML = `Галерея стихов (${poetryData.length} стиха)`));
    allYearCreation.forEach((item) => (item.textContent = "2022 год"));
    allScoreTitle.forEach(
      (item) =>
        (item.innerHTML = `Баллы:
        <span id="score-points" class="score__points">${settingGame.score}</span>`)
    );
  }
  setLocalStorage();

  if (!document.querySelector(".body-quiz-poems").classList.contains("hidden")) {
    startGame();
  }
}
