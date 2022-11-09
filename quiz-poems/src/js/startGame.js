import {
  currentQuestionAudio,
  settingGame,
} from "../pages/quiz-poems/quiz-poems";
import addAnswersOptions from "./addAnswerOptions";
import choiceAnswer from "./choiceAnswer";
import { currentQuestionPlayer } from "../pages/quiz-poems/quiz-poems";

function startGame() {
  settingGame.numberWrongAnswer = 0;
  currentQuestionAudio.src = settingGame.currentQuestion.srcAudio;
  addAnswersOptions(choiceAnswer(settingGame.categoryGame), 6);
}

export default startGame;
