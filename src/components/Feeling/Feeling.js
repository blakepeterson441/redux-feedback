import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import Review from '../Review/Review';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
});


class Feeling extends Component {

    state = {
        feeling: {
            feeling_value: '',
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            feeling: {
                ...this.state.feeling,
                [propertyName]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding feeling`, this.state.feeling);
        this.props.dispatch({
            type: `ADD_TO_FEELING`,
            payload: this.state.feeling
        })
        this.props.history.push('/Understanding');
    } // handle submit

    render(){

        const { classes } = this.props;

        return(
            <>
                <h1>How are you feeling today?</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField required id="feeling"
                        className={classes.textField}
                        label="Feeling?" margin="normal"
                        onChange={(event) => this.handleChangeFor('feeling_value', event)}
                    />
                <button type="submit">
                    Next
                </button>
                </form>

            </>
        )
    }
}

export default withStyles(styles)(connect()(Feeling));