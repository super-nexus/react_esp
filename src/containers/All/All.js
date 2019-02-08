import React, {Component} from 'react';

import ItemShowCase from '../../components/ItemShowCase/ItemShowCase';
import Spinner from '../../components/UI/Spinner/Spinner';

import {connect} from 'react-redux';

import * as funcActions from '../../Store/actions/index';



class All extends Component {

    componentDidMount(){
        console.log("Component did mount");
        this.props.onFetchNodes();
    }

    onItemClicked = (node) => {
        console.log(node);
        this.props.onItemClicked(node);
        this.props.history.push('/all/esp_data');
    };

    render() {


        let toShow = <Spinner />;

        if(!this.props.loading){
            toShow = this.props.nodes.map((node) => {
                console.log(node);
                return <ItemShowCase key={node.mac_address} type='1' name={node.name} clicked={() => this.onItemClicked(node)}/>
            });
        }

        return (
            <div>
                {toShow}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        nodes: state.nodes,
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return{
        onFetchNodes: () => dispatch(funcActions.fetchNodes()),
        onItemClicked: (node) => dispatch(funcActions.setCurrentNode(node))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(All);