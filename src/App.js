import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <h1> Testing app.js </h1>
      </div>
    );
  }
}

export default App;
