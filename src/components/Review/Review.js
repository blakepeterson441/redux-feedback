import React, { Component } from 'react';
import {connect} from 'react-redux';


class Review extends Component {

    state = {
        feeling: this.props.reduxStore.feelingReducer,
    }

    render(){
        return(
            <>
                <h1>Review Your Feedback</h1>
                <div>
                    <div>{this.state.feeling}</div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);