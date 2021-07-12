class QuestionService {
    fetchQuestions() {
        return axios({
            url: 'http://localhost:3000/questions',
            method: 'GET',
        });
    }
}

export default QuestionService;
