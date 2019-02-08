import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';

const toolbar = props => {

    return(
        <div className="Toolbar">
           <NavigationItems/>
        </div>
    );
};

export default toolbar;