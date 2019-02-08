import React from 'react';
import esp_logo from '../../Assets/Images/esp_logo.png';
import pi_logo from '../../Assets/Images/pi_logo.png';
import './ItemShowCase.css';

const ItemShowCase = props => {
    return (
        <div onClick={props.clicked} className='ItemShowCase'>
            <img src={ props.type === '1' ? esp_logo : pi_logo} alt='esp logo' />
            <div className='ItemShowCase_Details'>
                <span><h2>{props.name}</h2></span>
            </div>
        </div>
    );
};

export default ItemShowCase;