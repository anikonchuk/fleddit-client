import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavigationBar'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Testing app.js </h1>
        <Welcome />
      </div>
    );
  }
}

export default App;
