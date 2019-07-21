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

    state = {
        support: {
            support_value: '',
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            support: {
                ...this.state.support,
                [propertyName]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding support`, this.state.support);
        this.props.dispatch({
            type: `ADD_TO_SUPPORT`,
            payload: this.state.support
        })
        this.props.history.push('/Comments');
    } // handle submit


    render(){

        const { classes } = this.props;

        return(
            <>
                <h1>How well are you being supported?</h1>
                <form>
                    <TextField required id="support"
                        className={classes.textField}
                        label="Support?" margin="normal"onChange={(event) => this.handleChangeFor('support_value', event)}
                    />
                    <button type="submit">
                        Next
                    </button>
                </form>
            </>
        )
    }
}

export default withStyles(styles)(connect()(Support));