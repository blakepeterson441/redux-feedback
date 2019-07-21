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


class Feeling extends Component {

    render(){

        const { classes } = this.props;

        return(
            <>
                <h1>How are you feeling today?</h1>
                <form>
                    <TextField required id="feeling"
                        className={classes.textField}
                        label="Feeling?" margin="normal"
                        
                    />
                </form>
            </>
        )
    }
}

export default withStyles(styles)(connect()(Feeling));