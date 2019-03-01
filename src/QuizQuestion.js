import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js'
import classNames from 'classnames'

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { incorrectAnswer: false };
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.setState({ incorrectAnswer: false });
            this.props.setCorrectAnswer();
        } else {
            this.setState({ incorrectAnswer: true })
            this.props.setIncorrectAnswer();
        }
    }

    render() {
        let { quiz_question } = this.props;
        let classes = classNames({
            'incorrect': this.state.incorrectAnswer,
            'correct': !this.state.incorrectAnswer
        });

        return (
            <main>
                <section>
                    <p className={ classes }>{quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map((answer_option, index) => {
                                return <QuizQuestionButton
                                    key={index}
                                    button_text={answer_option}
                                    clickHandler={this.handleClick.bind(this)} />
                            })
                        }
                    </ul>
                </section>
                {
                    this.state.incorrectAnswer
                        ? <p className='error'>Sorry, that's not right</p>
                        : null
                }
            </main>
        );
    }
}

export default QuizQuestion