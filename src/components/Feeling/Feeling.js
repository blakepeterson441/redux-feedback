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

class Feeling extends Component {

    // set local state
    state = {
        newFeeling: {
            feeling_value: '',
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newFeeling: {
                ...this.state.newFeeling,
                [propertyName]: event.target.value
            }
        })
    }

    // TODO - Update Redux, dispatch Action
    // handleSubmit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding feeling`, this.state.newFeeling);
        this.props.dispatch({
            type: `ADD_TO_FEELING`,
            payload: this.state.newFeeling
        })
        // Navigate to next page
        this.props.history.push('/Understanding');
    } // end handle submit


    // render to the DOM
    render(){

        const { classes } = this.props;

        return(
            <>
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField required id="feeling"
                        className={classes.textField}
                        label="Feeling?" margin="normal"
                        value={this.state.newFeeling.feeling_value}
                        onChange={(event) => this.handleChangeFor('feeling_value', event)}
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

export default withStyles(styles)(connect()(Feeling));