import React, { Component } from 'react';
import QuizAdd from './QuizAdd';

class QuizEnd extends Component {
    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <p>Correct answers: { this.props.correctAnswers }</p>
                <p>Incorrect answers: { this.props.incorrectAnswers }</p>
                <a onClick={this.props.resetClickHandler}>
                    Reset Quiz
                </a>

                <hr />

                <QuizAdd onAddNewQuestion={this.props.onAddNewQuestion}/>
            </div>
        );
    }
}

export default QuizEnd