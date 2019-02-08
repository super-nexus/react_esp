import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';

class Layout extends Component {

    render() {
        return (
            <>
                <Toolbar/>
                <div className='Content'>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Layout;
