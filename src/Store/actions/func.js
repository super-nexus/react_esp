import * as actionTypes from './actions';
import axios from 'axios';


export const storeFetchedNodes = nodesArray => {
    return{
        type: actionTypes.INITIALIZE_ESP,
        nodes: nodesArray
    }
};

export const changePin = (oldPin, newPin) => {
    return{
        type: actionTypes.CHANGE_PIN,
        oldPin,
        newPin
    }
};

export const deletePinAction = pin => {
    return{
        type: actionTypes.DELETE_PIN,
        pin
    }
};

export const addPin = freePin => {
    return{
        type: actionTypes.ADD_PIN,
        freePin
    }
};

const init = () => {
    return{
        type: actionTypes.INIT
    }
};

export const fetchNodes = () => {

    return dispatch => {
        dispatch(init());
        axios.post("http://localhost:3200/setupApp2", null, {
            headers: {
                'Access-Control-Allow-Origin' : "*"
            }
        }).then((response) => {

            console.log(response);
            dispatch(storeFetchedNodes(response.data))

        });
    }
};


export const setCurrentNode = node => {

    console.log("setting current node");
    console.log(node);

    return{
        type: actionTypes.SET_CURRENT_NODE,
        currentNode: node
    }
};