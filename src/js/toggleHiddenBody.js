import { bodyStartGame, bodyQuizPoems } from "./const";
export default function toggleHiddenBody() {
  bodyStartGame.classList.toggle("hidden");
  bodyQuizPoems.classList.toggle("hidden");
}
