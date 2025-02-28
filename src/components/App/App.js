import React, { Component } from 'react';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import { teal, cyan, red } from '@material-ui/core/colors';

import { HashRouter as Router, Route } from 'react-router-dom';

const theme = createMuiTheme({ 
  palette: {
    primary: teal,
    secondary: cyan,
    error: red,

  }
});

// set up theme/routes/home page in App
// render to the DOM
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
            <Route path='/Comments' component={Comments} />
            <Route path='/Review' component={Review} />
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
