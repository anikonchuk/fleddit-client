import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Testing app.js </h1>
      </div>
    );
  }
}

export default App;
