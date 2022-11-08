import {
  currentQuestionAudio,
  settingGame,
} from "../pages/quiz-poems/quiz-poems";
import addAnswersOptions from "./addAnswerOptions";
import choiceAnswer from "./choiceAnswer";

function startGame() {
  currentQuestionAudio.src = settingGame.currentQuestion.srcAudio;
  addAnswersOptions(choiceAnswer(settingGame.categoryGame), 6);
}

export default startGame;
