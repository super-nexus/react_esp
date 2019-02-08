import React, {Component} from 'react';
import './PinData.css';
import {connect} from 'react-redux';

const gpio = {
    'D0': 16,
    'D1': 5,
    'D2': 4,
    'D3': 0,
    'D4': 2,
    'D5': 14,
    'D6': 12,
    'D7': 13,
    'D8': 15,
    'RX': 3,
    'TX': 1,
    'SDD2': 9,
    'SDD3': 10
};

class PinData extends Component{


    state = {
        gpio : {
            'D0': 16,
            'D1': 5,
            'D2': 4,
            'D3': 0,
            'D4': 2,
            'D5': 14,
            'D6': 12,
            'D7': 13,
            'D8': 15,
            'RX': 3,
            'TX': 1,
            'SDD2': 9,
            'SDD3': 10
        }
    };



    render(){
        return(
            <div className='PinData'>
            <span>
                <select onChange={this.props.changed} value={this.props.pin}>
                    {Object.keys(this.props.gpio).map((key) => {
                        return <option key={this.props.gpio[key]} value={this.props.gpio[key]}>{key}</option>;
                    })}
                </select>
            </span>
                <span><input value={this.props.name} /></span>
                <span>{this.props.state}</span>
                <button onClick={this.props.delete}>Delete</button>
            </div>
        )

    }
}


const mapStateToProps = state => {
    return {
        node: state.currentNode
    }
};

export default connect(mapStateToProps, null)(PinData);