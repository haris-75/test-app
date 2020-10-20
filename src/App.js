import React, { Component } from 'react';
import './App.css';
import Animal from './Animal/Animal.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello I`m React APP </h1>

      <Animal />
      </div>
    );
    //return React.createElement('div',{className: "App"},React.createElement('h1',null,'Me hou react ke app'));
  }
}

export default App;
