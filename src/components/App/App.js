import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Comment from '../Comment/Comment';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
          <Feeling />
          <Understanding />
          <Support />
          <Comment />
      </div>
    );
  }
}

export default App;
