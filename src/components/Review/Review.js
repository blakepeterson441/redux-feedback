import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';


class Review extends Component {

    // set local state
    state = {
        feeling: this.props.reduxStore.feelingReducer.feeling_value,
        understanding: this.props.reduxStore.understandingReducer.understanding_value,
        support: this.props.reduxStore.supportReducer.support_value,
        comments: this.props.reduxStore.commentsReducer.comments_value,

    }

    isSurveyComplete = () => {
        let button = '';
        let feeling = this.props.reduxStore.feelingReducer.feeling_value;
        let understanding = this.props.reduxStore.understandingReducer.understanding_value;
        let support = this.props.reduxStore.supportReducer.support_value;
        if ( (feeling > 0 && feeling <= 5) &&
                (understanding > 0 && understanding <= 5) &&
                (support > 0 && support <= 5)) 
                {
                    button = <button onClick={this.complete}>Submit</button>
                }
                else {
                    button = <button disabled>Incomplete</button>;
                }
        return button;
    }

    // send information to database
    complete = () => {
        Axios.post('/api/form', this.state).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
        // Go back to Main page
        this.props.history.push('/');
    }

    // render to the DOM
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
                {this.isSurveyComplete()}
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);