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

class Support extends Component {

    // set local state
    state = {
        newSupport: {
            support_value: '',
        }
    }   

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newSupport: {
                ...this.state.newSupport,
                [propertyName]: event.target.value
            }
        })
    }

    // handle submit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding support`, this.state.newSupport);
        this.props.dispatch({
            type: `ADD_TO_SUPPORT`,
            payload: this.state.newSupport
        })
        // Navigate to next page
        this.props.history.push('/Comments');
    } // end handle submit


    // render to the DOM
    render(){

        const { classes } = this.props;

        return(
            <>
                <h1>How well are you being supported?</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField required id="support"
                        className={classes.textField}
                        label="Support?" margin="normal"
                        value={this.state.newSupport.support_value}
                        onChange={(event) => this.handleChangeFor('support_value', event)}
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

export default withStyles(styles)(connect()(Support));