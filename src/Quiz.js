import React, { Component, Fragment } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';
import QuizStatus from './QuizStatus';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1,
            correctAnswers: 0,
            incorrectAnswers: 0,
            questions: quizData.quiz_questions
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

    onAddNewQuestion = newQuestion => {
        let newQuestions = this.state.questions;

        newQuestion["id"] = newQuestions.length;
        newQuestions.push(newQuestion);

        this.setState({ questions: newQuestions });
    }

    render() {
        const isQuizEnd = ((this.state.quiz_position - 1) === this.state.questions.length);

        return (
            <div>
                {
                    isQuizEnd
                        ? <QuizEnd resetClickHandler={this.handleResetClick}
                            correctAnswers={this.state.correctAnswers}
                            incorrectAnswers={this.state.incorrectAnswers}
                            onAddNewQuestion={this.onAddNewQuestion} />
                        : <Fragment>
                            <QuizStatus quiz_position={this.state.quiz_position}
                                correctAnswers={this.state.correctAnswers}
                                incorrectAnswers={this.state.incorrectAnswers}
                                nrOfQuestions={this.state.questions.length} />
                            <QuizQuestion quiz_question=
                                {this.state.questions[this.state.quiz_position - 1]}
                                setCorrectAnswer={this.setCorrectAnswer}
                                setIncorrectAnswer={this.setIncorrectAnswer}
                                onAddNewQuestion={this.onAddNewQuestion} />
                        </Fragment>
                }
            </div>
        );
    }
}

export default Quiz