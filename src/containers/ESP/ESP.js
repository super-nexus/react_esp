import React, {Component, PureComponent} from 'react';
import './ESP.css';
import ItemShowCase from '../../components/ItemShowCase/ItemShowCase';
import PinData from '../../components/PinData/PinData';
import Spinner from '../../components/UI/Spinner/Spinner';
import GreenButton from '../../components/UI/Button/GreenButton/GreenButton';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';
import * as actions from '../../Store/actions/index';
import * as functions from './functions';

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

let baseData = {
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

class Esp extends Component {

    state = {
        gpio: {
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
        },
        possible: true
    };


    componentDidMount() {
        if (_.isEmpty(this.props.node)) {
            return;
        }
        this.setState({gpio: functions.trimGPIO(gpio, this.props.node)});

    }

    componentDidUpdate() {
        if (_.isEmpty(this.props.node)) {
            return;
        }

        console.log("current node: ", this.props.node);

        let newGpio = functions.trimGPIO(gpio, this.props.node);

        console.log("New gpio ", newGpio);

        if(_.isEqual(newGpio, this.state.gpio)){
            return;
        }
        if(!_.isEmpty(newGpio)) {
            this.setState({gpio: newGpio, possible: true});
        }
        else{
            this.setState({gpio: newGpio});
        }
    }



    pinChanged = (event, previousPin) => {
        let newPin = event.target.value;
        this.props.changePin(previousPin, newPin);
    };

    saveNode = () => {
        console.log("Save node");
    };

    pinDeleted = (pin) => {
        this.props.deletePin(pin);
    };

    addPin = () => {
        console.log("Add pin");

        if (_.isEmpty(this.state.gpio)) {
            this.setState({possible: false});
        }
        else {
            let holder = Object.keys(this.state.gpio);
            this.props.addPin(this.state.gpio[holder[0]]);

            let gpioHolder = {...this.state.gpio};
            delete gpioHolder[holder[0]];
            this.setState({
                gpio: gpioHolder,
            });
        }

    };

    mapPinToKey = pin => {
        let keys = Object.keys(baseData);
        for (const key of keys) {
            if (baseData[key] === pin) {
                return key;
            }
        }
    };

    render() {
        // console.log(this.props.node);
        let toShow = <Spinner/>;
        if (_.isEmpty(this.props.node)) {
            toShow = <Redirect to='/all'/>
        }
        else {
            toShow =
                (<div className="PinDatas">
                    {this.props.node['switches'].map((light) => {
                        let mappedKey = this.mapPinToKey(light.pin);
                        let newGpio = {...this.state.gpio};
                        newGpio[mappedKey] = light.pin;
                        return <PinData changed={(event) => this.pinChanged(event, light.pin)} gpio={newGpio} key={light.id}
                                        delete={() => this.pinDeleted(light.pin)} pin={light.pin} name={light.name}
                                        state={light.state}/>
                    })}
                </div>);
        }

        return (
            <div className="ESP">
                <ItemShowCase name="Esp_8266" type='1'/>
                {toShow}
                {this.state.possible ? <GreenButton clicked={this.addPin} title="ADD"/> : null}
                <GreenButton clicked={this.saveNode} title="SAVE"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        node: state.currentNode
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deletePin: (pin) => dispatch(actions.deletePinAction(pin)),
        addPin: (freePin) => dispatch(actions.addPin(freePin)),
        changePin: (oldPin, newPin) => dispatch(actions.changePin(oldPin, newPin))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Esp);