import MultipleChoice from '../models/MultipleChoice.js';
import FillInBlank from '../models/FillInBlank.js';
import QuestionService from '../services/QuestionSevice.js';

const questionService = new QuestionService();
let questionList = [];

const renderHTML = () => {
    let stt = 1;
    let content = '';
    
    questionList.map((question, index) => {
        let btnNext = '';
        if (index < questionList.length - 1) {
            btnNext = `<a href="#quiz-${questionList[index + 1].id}" class="quiz__btn">NEXT</a>`
        } else {
            btnNext = `<a href="#quizResult" class="quiz__btn">SUBMIT</a>`
        }

        content += `
            <div class="quizSection" id="quiz-${question.id}">
                <div class="quiz__main">
                    <div class="quiz__header">
                        ${question.content}
                    </div>
                    <div class="quiz__body row">
                        ${question.renderAnswers()}
                    </div>
                    <div class="quiz__footer">
                        <p class="quiz__current">Question ${stt} of ${questionList.length}</p>
                        ${btnNext}
                    </div>
                </div>
            </div>
        `;

        stt++;
    });

    document.getElementById('quizList').innerHTML = content;
}

const renderQuestions = () => {
  questionService
    .fetchQuestions()
    .then(res => {
        res.data.forEach(question => {
            const { id, questionType, content, answers } = question;

            switch (questionType) {
                case 1: {
                    const multipleChoice = new MultipleChoice(id, questionType, content, answers);
                    questionList = [...questionList, multipleChoice];
                    break;
                }
                case 2: {
                    const fillInBlank = new FillInBlank(id, questionType, content, answers);
                    questionList = [...questionList, fillInBlank];
                    break;
                }    
                default:
                    console.log('Invalid questionType');
            }
        })

        renderHTML();
    })
    .catch(err => {
      console.log(err);
    });
};

renderQuestions();
