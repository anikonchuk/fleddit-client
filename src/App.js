import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavigationBar'
import Welcome from './components/Welcome'
import About from './components/About'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
