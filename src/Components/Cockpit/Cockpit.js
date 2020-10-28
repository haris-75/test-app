import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = props => {

    let btnClass = 'button_simple';
    if(props.showPersons)
        btnClass = 'button_click';  

  return (
    <div>
      <h1>{props.title}</h1>
      <p>This is really working!</p>
      <button className = {btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;