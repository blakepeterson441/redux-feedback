import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';


class Review extends Component {


    complete = () => {
        Axios.post('/api/form', this.state).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

    render(){

        return(
            <>
                <h1>Review Your Feedback</h1>
                <div>
                    <div>Feelings: {this.props.reduxStore.feelingReducer.feeling_value}</div>
                    <div>Understanding: {this.props.reduxStore.understandingReducer.understanding_value}</div>
                    <div>Support: {this.props.reduxStore.supportReducer.support_value}</div>
                    <div>Comments: {this.props.reduxStore.commentsReducer.comments_value}</div>
                </div>
                <button onClick={this.complete}>Submit</button>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);