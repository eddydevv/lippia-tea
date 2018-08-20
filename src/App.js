import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Jumbotron } from 'reactstrap'
import Header from './Layouts/Header.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Jumbotron>
            <Header title="Lippia Tea" />
          </Jumbotron>
        </div>
      </Router>
    );
  }
}

export default App;
