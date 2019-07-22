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

class Understanding extends Component {

    state = {
        newUnderstanding: {
            understanding_value: '',
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            newUnderstanding: {
                ...this.state.newUnderstanding,
                [propertyName]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding understanding`, this.state.newUnderstanding);
        this.props.dispatch({
            type: `ADD_TO_UNDERSTANDING`,
            payload: this.state.newUnderstanding
        })
        this.props.history.push('/Support');
    } // handle submit

    render(){

        const { classes } = this.props;

        return(
            <>
                <h1>How well are you understanding the content?</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField required id="understanding"
                        className={classes.textField}
                        label="Understanding?" margin="normal"
                        value={this.state.newUnderstanding.understanding_value}
                        onChange={(event) => this.handleChangeFor('understanding_value', event)}
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

export default withStyles(styles)(connect()(Understanding));