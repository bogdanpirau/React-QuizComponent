import React, { Component } from 'react'

class QuizStatus extends Component {
    render() {
        let { quiz_position: index, correctAnswers, incorrectAnswers, nrOfQuestions } = this.props;

        return <div>
            <p>Current question {index} of {nrOfQuestions}</p>
            <p>Correct answers: {correctAnswers}</p>
            <p>Incorrect answers: {incorrectAnswers}</p>
            <hr />
        </div>
    }
}

export default QuizStatus