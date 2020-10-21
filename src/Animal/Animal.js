import React from 'react';

const Animal = (props) => {
    return (
        <tr>
        <th>{props.specie}</th>
        <td>{props.greetings} {props.name}</td>
        </tr>

        );
}

export default Animal;
