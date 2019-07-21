import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
});

class Understanding extends Component {

    render(){

        const { classes } = this.props;

        return(
            <>
                <h1>How well are you understanding the content?</h1>
                <form>
                    <TextField required id="understanding"
                        className={classes.textField}
                        label="Understanding?" margin="normal"
                        
                    />
                </form>
            </>
        )
    }
}

export default withStyles(styles)(connect()(Understanding));