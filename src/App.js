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
  
  switchSpecieHandler = () =>{
    this.setState({
      Animals: [
        {specie: 'Birds', name:'Lion', greetings:'Hello I am a'},
        {specie: 'Reptiles', name:'Eagle', greetings:'Hi Guys I am an'},
        {specie: 'Mammals', name:'Turtle', greetings:'Hey Fellas I am'}
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
          <Animal specie={animal.specie} greetings={animal.greetings} name={animal.name}/>
        ))}
        </tbody>
        </table>

        <button onClick={this.switchSpecieHandler}>Switch Species</button>

      </div>
    );
    //return React.createElement('div',{className: "App"},React.createElement('h1',null,'Me hou react ke app'));
  }
}

export default App;