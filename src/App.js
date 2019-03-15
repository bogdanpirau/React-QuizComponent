import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import Quiz from './Quiz'
import QuizAdd from './QuizAdd';

class App extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;