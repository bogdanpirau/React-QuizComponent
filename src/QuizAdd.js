import React, { Component } from 'react'

class QuizAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            options: [],
            correctAnswerId: -1
        };
    }

    onQuestionChangeHandler = (e) => {
        this.setState({ question: e.target.value });
    }

    onAddAnswerClickHandler() {
        let newOptions = this.state.options;
        newOptions.push(document.getElementById('answer').value);

        this.setState({ options: newOptions });
        document.getElementById('answer').value = '';
    }

    onCorrectAnswerChangeClickHandler = e => {
        let correctAnswerId = this.state.options.indexOf(e.target.value);

        this.setState({ correctAnswerId: correctAnswerId });
    }

    onAddQuestionClickHandler = () => {
        this.props.onAddNewQuestion({
            "instruction_text": this.state.question,
            "answer_options": this.state.options,
            "answer": this.state.options[this.state.correctAnswerId]
          });
    }

    render() {
        let { question, options, correctAnswerId } = this.state;

        return <div>
            Question:
            <input id="question" type="text" value={question} onChange={this.onQuestionChangeHandler} />
            <br />

            Answer option:
            <input id="answer" type="text" />
            <input id="addAnswer" type="submit" value="add" onClick={ () => this.onAddAnswerClickHandler() } />
            <br />

            Select correct answer:
            <select onChange={this.onCorrectAnswerChangeClickHandler}>
                {
                    this.state.options.map((answer_option, index) => {
                        return <option key={index}>{answer_option}</option>
                    })
                }
            </select>
            <br />

            Correct answer:
            <span>{correctAnswerId >= 0 ? options[correctAnswerId] : ''}</span>
            <br />

            <input id="addQuestion" type="submit" value="add" onClick={this.onAddQuestionClickHandler} />
        </div>
    }
}

export default QuizAdd