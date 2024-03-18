class Question {
  // YOUR CODE HERE:
  //
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    return this.choices.sort((a, b) => 0.5 - Math.random());
  }
}

const testChoices = ["choice1", "choice2", "choice3"];

const question = new Question("test", testChoices, "test");

console.log(question.shuffleChoices());
