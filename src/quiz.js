class Quiz {
  // YOUR CODE HERE:
  //
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    return this.questions.sort((a, b) => 0.5 - Math.random());
  }

  checkAnswer(answer) {
    return this.questions[this.currentQuestionIndex].answer === answer
      ? this.correctAnswers++
      : null;
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    if (1 <= difficulty && difficulty <= 3) {
      this.questions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
    }
  }

  averageDifficulty() {
    return (
      this.questions.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.difficulty;
      }, 0) / this.questions.length
    );
  }

  restart() {
    this.timeRemaining = this.timeLimit;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
    this.shuffleQuestions();
  }
}
