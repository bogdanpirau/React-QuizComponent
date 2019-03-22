import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react"
import './App.css'
import Quiz from './Quiz'
import QuizAdd from './QuizAdd';

class App extends Component {
  store = {};

  render() {
    return (
      <Router>
        <Provider store={this.store}>
          <div>
            <ul>
              <li>
                <Link to="/">Quiz</Link>
              </li>
              <li>
                <Link to="/Add">Add question</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Quiz} />
            <Route path="/Add" component={QuizAdd} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;