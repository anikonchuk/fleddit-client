import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Welcome from './components/Welcome'
import About from './components/About'
import PostsIndexContainer from './containers/PostsIndexContainer'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/posts' component={PostsIndexContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
