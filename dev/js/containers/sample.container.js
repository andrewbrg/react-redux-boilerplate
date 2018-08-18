import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {sampleAction} from "../actions";


class SampleContainer extends Component {
    render() {
        if (!this.props.sampleStateProp) {
            return (<div></div>);
        }
        return (
            <div onClick={() => this.props.sampleAction(this.props.sampleStateProp)}>{this.props.sampleStateProp.id}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sampleStateProp: state.sample
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({sampleAction: sampleAction}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SampleContainer);
