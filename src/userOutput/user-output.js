import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="userOutput">
        <p>Hello my username is {props.username}.</p>
        </div>            
    );
}

export default UserOutput;