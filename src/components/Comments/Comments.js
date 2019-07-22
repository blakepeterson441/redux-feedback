import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Review from '../Review/Review';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
});

class Comments extends Component {

    // set local state
    state = {
        newComments: {
            comments_value: '',
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newComments: {
                ...this.state.newComments,
                [propertyName]: event.target.value
            }
        })
    }

    // handle submit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding comments`, this.state.newComments);
        this.props.dispatch({
            type: `ADD_TO_COMMENTS`,
            payload: this.state.newComments
        })
        // Navigate to next page
        this.props.history.push('/Review');
    }  // end handle submit


    // render to the DOM
    render(){

        const { classes } = this.props;

        return(
            <>
                <h1>Any comments you want to leave?</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField required id="comments"
                        className={classes.textField}
                        label="Comments" margin="normal"
                        value={this.state.newComments.comments_value}
                        onChange={(event) => this.handleChangeFor('comments_value', event)}
                        
                    />
                    <button type="submit">
                        Next
                    </button>
                    <Review />
                </form>
            </>
        )
    }
}

export default withStyles(styles)(connect()(Comments));