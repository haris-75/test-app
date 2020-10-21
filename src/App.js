import React, { Component } from 'react';
import './App.css';
import Animal from './Animal/Animal.js'

class App extends Component  {

  state={
    Animals: [
      {specie: 'Mammals', name:'Lion', greetings:'Hello I am a'},
      {specie: 'Birds', name:'Eagle', greetings:'Hi Guys I am an'},
      {specie: 'Reptiles', name:'Turtle', greetings:'Hey Fellas I am'}
    ],
    otherstate: {value: 'someValue'}
  }
  
  switchSpecieHandler = (name102) =>{
    this.setState({
      Animals: [
        {specie: 'Mammals', name:name102, greetings:'Hello I am a'},
        {specie: 'Birds', name:'Eagle', greetings:'Hi Guys I am an'},
        {specie: 'Reptiles', name:'Turtle', greetings:'Hey Fellas I am'}
      ]
    })
  }
 
  inputChangeHandler = (event) =>{
    this.setState({
      Animals: [
        {specie: 'Mammals', name:event.target.value, greetings:'Hello I am a'},
        {specie: 'Birds', name:'Eagle', greetings:'Hi Guys I am an'},
        {specie: 'Reptiles', name:'Turtle', greetings:'Hey Fellas I am'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        
        <h1> Hello I`m React APP </h1>

        <table className="table101">
          <tbody>
          {this.state.Animals.map((animal)=>(
            <Animal 
              specie={animal.specie} 
              greetings={animal.greetings} 
              name={animal.name}
              click={this.switchSpecieHandler.bind(this,'Big Lion')}
              changed={this.inputChangeHandler}
            />
          ))}
          </tbody>
        </table>

        <button onClick={this.switchSpecieHandler.bind(this,'Aslam')}>Switch Species</button>

      </div>
    );
    //return React.createElement('div',{className: "App"},React.createElement('h1',null,'Me hou react ke app'));
  }
}

export default App;