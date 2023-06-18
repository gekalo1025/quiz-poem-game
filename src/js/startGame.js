import {
  currentQuestionAudio,
  currentQuestionPlayer,
  settingGame,
} from "../pages/quiz-poems/quiz-poems";
import addAnswersOptions from "./addAnswerOptions";
import choiceAnswer from "./choiceAnswer";
import cleanTitle from "./cleanTitle";

function startGame() {
  cleanTitle();
  settingGame.counterClickError = 0;
  settingGame.numberWrongAnswer = 0;
  currentQuestionAudio.src = settingGame.currentQuestion.srcAudio;
  addAnswersOptions(choiceAnswer(settingGame.categoryGame), 6);
}

export default startGame;
