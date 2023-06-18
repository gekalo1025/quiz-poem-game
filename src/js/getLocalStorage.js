import { settingGame } from "../pages/quiz-poems/quiz-poems";
import toggleLanguage from "./toggleLanguage";

export function getLocalStorage() {
  if (localStorage.getItem("language")) {
    if (localStorage.getItem("language") === "ru") {
      settingGame.language = "en";
    }
    if (localStorage.getItem("language") === "en") {
      settingGame.language = "ru";
    }
    toggleLanguage();
  }
  // else {
  //   localStorage.setItem("language", settingGame.language);
}
