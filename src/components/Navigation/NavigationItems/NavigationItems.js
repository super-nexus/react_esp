import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = props => {
    return (
        <div className='NavigationItems'>
            <NavigationItem link='/all' exact >All </NavigationItem>
            <NavigationItem link='/' exact >Home</NavigationItem>
            <NavigationItem link='/lights' exact>Lights</NavigationItem>
        </div>
    );
};

export default NavigationItems;