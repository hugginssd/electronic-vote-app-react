import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './style';
import withStyles from '@material-ui/core/styles/withStyles';
import { FormControl, CssBaseline } from '@material-ui/core';
import Button from '@material-ui/core/Button';


class CastVoteComponent extends React.Component{
    render(){

        const {classes} = this.props;

        return(
                <div>
                    <main className={classes.main}>
                        <CssBaseline></CssBaseline>
                            <div>
                                <Paper className={classes.paper}>
                                    <Typography component='h5' variant='h6'>Section A</Typography>
                                    <form className = {classes.form}>
                                        <FormControl required fullWidth margin ='normal'>
                                            <Typography component='h6' variant='h7'>Candidate name</Typography>
                                         </FormControl>
                                         <Button type='submit' fullWidth variant='contained' color = 'primary' className={classes.submit}>vote president</Button>
                                    </form>
                                    <form className = {classes.form}>
                                        <FormControl required fullWidth margin ='normal'>
                                            <Typography component='h6' variant='h7'>Candidate name</Typography>
                                         </FormControl>
                                         <Button type='submit' fullWidth variant='contained' color = 'primary' className={classes.submit}>vote secretary</Button>
                                    </form>
                                    <form className = {classes.form}>
                                        <FormControl required fullWidth margin ='normal'>
                                            <Typography component='h6' variant='h7'>Candidate name</Typography>
                                         </FormControl>
                                         <Button type='submit' fullWidth variant='contained' color = 'primary' className={classes.submit}>vote chairman</Button>
                                    </form>
                                </Paper>
                            </div>
                    </main>
                </div>
        );
    }
}

export default withStyles(styles)(CastVoteComponent);