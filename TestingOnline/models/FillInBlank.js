import Question from "./Question.js";

class FillInBlank extends Question {
    constructor(id, questionType, content, answers) {
        super(id, questionType, content, answers);
    }

    renderAnswers() {
        return `
            <div class="col-12">
                <textarea class="form-control" id="fill${this.id}-fillAnswer${this.answers[0].id}" rows="3"></textarea>
            </div>
        `;
    }

    checkCorrect() {
        
    }
}

export default FillInBlank;