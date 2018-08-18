import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {sampleAction} from "../actions";


class SampleContainer extends Component {

    renderList() {
        return this.props.sampleProperty.map((item) => {
            return (
                <div key={item.id} onClick={() => this.props.sampleAction(item)}>{item.id}</div>
            );
        });
    }

    render() {
        if (!this.props.sampleProperty) {
            return (
                <div>Nothing to display</div>
            );
        }
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sampleProperty: state.sample
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({sampleAction: sampleAction}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SampleContainer);
