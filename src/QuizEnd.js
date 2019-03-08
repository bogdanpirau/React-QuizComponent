import React, { Component } from 'react';
import QuizAdd from './QuizAdd';

class QuizEnd extends Component {
    handleResetClick() {
        this.props.resetClickHandler();
    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <p>Correct answers: { this.props.correctAnswers }</p>
                <p>Incorrect answers: { this.props.incorrectAnswers }</p>
                <a href='' onClick={this.handleResetClick.bind(this)}>
                    Reset Quiz
                </a>

                <hr />

                <QuizAdd onAddNewQuestion={this.props.onAddNewQuestion}/>
            </div>
        );
    }
}

export default QuizEnd