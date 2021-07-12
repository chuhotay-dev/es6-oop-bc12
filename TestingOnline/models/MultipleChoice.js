import Question from "./Question.js";

class MultipleChoice extends Question {
    constructor(id, questionType, content, answers) {
        super(id, questionType, content, answers);
    }

    renderAnswers() {
        const content = this.answers.map(answer => {
            return `
                <div class="col-6">
                    <div class="custom-control custom-input">
                        <input type="radio" class="custom-control-input" id="multi${this.id}-multiAnswer${answer.id}" value="${answer.content}" name="multi-${this.id}"/>
                        <label class="custom-control-label" for="multi${this.id}-multiAnswer${answer.id}">${answer.content}</label>
                    </div>
                </div>
            `;
        });
        
        return content.join('');
    }

    checkCorrect() {

    }
}

export default MultipleChoice;