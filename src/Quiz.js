import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1,
            correctAnswers: 0,
            incorrectAnswers: 0
        };
    }

    showNextQuestion = () => {
        this.setState((state) => {
            return {};
        });
    }

    setCorrectAnswer = () => {
        this.setState((state) => {
            return {
                quiz_position: state.quiz_position + 1,
                correctAnswers: state.correctAnswers + 1
            };
        });
    }

    setIncorrectAnswer = () => {
        this.setState((state) => {
            return {
                quiz_position: state.quiz_position + 1,
                incorrectAnswers: state.incorrectAnswers + 1
            };
        });
    }

    handleResetClick = () => {
        this.setState({ quiz_position: 1 });
    }

    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length);

        return (
            <div>
                {
                    isQuizEnd
                        ? <QuizEnd resetClickHandler={this.handleResetClick}
                            correctAnswers={this.state.correctAnswers}
                            incorrectAnswers={this.state.incorrectAnswers} />
                        : <QuizQuestion quiz_question=
                            {quizData.quiz_questions[this.state.quiz_position - 1]}
                            setCorrectAnswer={this.setCorrectAnswer}
                            setIncorrectAnswer={this.setIncorrectAnswer} />
                }
            </div>
        );
    }
}

export default Quiz