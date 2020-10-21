import React, { Component } from 'react';
import './App.css';
//import Animal from './Animal/animal.js'
import UserOutput from './userOutput/user-output.js'
import UserInput from './userInput/user-input.js'

class App extends Component  {

  state = {
    username: 'one and only'
  }

  stateHandler = (event) => {
    this.setState({username:event.target.value});
  }

  render() {
    return (
      <div className="App">
        
        <h1> Hello I`m React APP </h1>

        {/*Code for Assignment-01*/ }
        <UserInput 
        changed={this.stateHandler}
        currentName={this.state.username}
        />  
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
    //return React.createElement('div',{className: "App"},React.createElement('h1',null,'Me hou react ke app'));
  }
}

export default App;