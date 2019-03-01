import React, { Component } from 'react';

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
            </div>
        );
    }
}

export default QuizEnd