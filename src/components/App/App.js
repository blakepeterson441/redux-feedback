import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Comment from '../Comment/Comment';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';

import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
            <Route exact path='/' component={Feeling} />
            <Route path='/Understanding' component={Understanding} />
            <Route path='/Support' component={Support} />
            <Route path='/Comment' component={Comment} />
        </div>
      </Router>
    );
  }
}

export default App;
