import * as actionTypes from '../actions/actions';
import _ from 'lodash';
import * as functions from '../actions/functions';

const initialState = {
    nodes: [],
    currentNode: {},
    loading: false
};

const reducer = (state = initialState, action) => {

    console.log("Hello");

    switch(action.type){

        case actionTypes.INIT:
            return{
                ...state,
                loading: true
            };

        case actionTypes.INITIALIZE_ESP:
            console.log("Initializing");
            return {
                ...state,
                nodes: action.nodes,
                loading: false
            };

        case actionTypes.SET_CURRENT_NODE:
            console.log(action.currentNode);
            return{
                ...state,
                currentNode: action.currentNode
            };

        case actionTypes.DELETE_PIN:
           // let nodeCopy = {...state.currentNode, ...state.currentNode['switches']};
            let switchArray = [...state.currentNode['switches']];

            console.log(`Pin: ${action.pin}`);

            for(let i = 0; i < switchArray.length; i++ ){
                console.log(`switchPin: ${switchArray[i]['pin']}`);
                if(switchArray[i]['pin'] === action.pin){
                    console.log("Its true!");
                    switchArray.splice(i, 1);
                    break;
                }
            }

            console.log(JSON.stringify(switchArray));

            return{
                ...state,
                currentNode: {
                    ...state.currentNode,
                    switches: switchArray
                }

            };

        case actionTypes.ADD_PIN:

            let switchArrayholder = [...state.currentNode['switches']];

            let holderObj = {
                name: 'Enter name',
                state: 0,
                pin: action.freePin,
                id: Math.random() * 100,
                pwm: {
                    enabled: false,
                    value: 0
                }
            };

            switchArrayholder.push(holderObj);
            return{
                ...state,
                currentNode: {
                    ...state.currentNode,
                    switches : switchArrayholder
                }
            };

        case actionTypes.CHANGE_PIN:
            const switchArrayCopy = [...state.currentNode['switches']];

            let lightObject = functions.findLightByPin(switchArrayCopy, action.oldPin);
            let light = lightObject.light;
            light['pin'] = action.newPin;

            switchArrayCopy[lightObject.index] = light;

            console.log(JSON.stringify(light));

            return{
                ...state,
                currentNode: {
                    ...state.currentNode,
                    switches: switchArrayCopy
                }
            };


        default:
            return state
    }


};

export default reducer;


