import React from 'react';

const Animal = (props) => {
    return (
        <tr>
        <th onClick={props.click}>{props.specie}</th>
        <td>{props.greetings} {props.name}</td>
        <td><input type="text" onChange={props.changed}/></td>
        </tr>

        );
}

export default Animal;
