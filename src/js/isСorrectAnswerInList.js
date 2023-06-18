export default function isCorrectAnswerInList(list, correctAnswer) {
  for (const answer of list) {
    if (answer.textContent === correctAnswer) {
      return true;
    }
  }
  return false;
}
