import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationItem = props => {
    return (
        <li className='NavigationItem'><NavLink exact={props.exact} to={props.link} activeClassName='NavActive'>{props.children}</NavLink></li>
    );
};

export default NavigationItem;