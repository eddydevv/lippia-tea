import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Jumbotron } from 'reactstrap'
import Header from './Layouts/Header.js'
import Welcome from './Components/Home/Welcome'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Jumbotron>
            <Header title="Lippia Tea" />
          </Jumbotron>
          <Switch>
            <Route exact path="/" component={Welcome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
