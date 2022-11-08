const bodyQuizPoems = document.querySelector(".body-quiz-poems");
const bodyStartGame = document.querySelector(".body-start-game");
export default function toggleHiddenBody() {
  bodyStartGame.classList.toggle("hidden");
  bodyQuizPoems.classList.toggle("hidden");
}
