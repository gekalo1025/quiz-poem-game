import { settingGame } from "../pages/quiz-poems/quiz-poems";

export function setLocalStorage() {
  localStorage.setItem("language", settingGame.language);
}
