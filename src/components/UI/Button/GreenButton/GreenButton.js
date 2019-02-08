import React from 'react';
import './GreenButton.css';

const GreenButton = (props) => {
    return (
        <div className="greenButton" onClick={props.clicked}>{props.title}</div>
    );
};

export default GreenButton;