import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './style';
import withStyles from '@material-ui/core/styles/withStyles';
import { FormControl, CssBaseline } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import NavBarComponent from '../navbar/navbar';


class CastVoteComponent extends React.Component{
    render(){

        const {classes} = this.props;

        return(
            <div >
            <NavBarComponent></NavBarComponent>
                <div class="container">
                        <div class="row">
                                    <div class="col-sm">
                                        <main className={classes.main}>
                                                <CssBaseline></CssBaseline>
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
                                            </main>
                                    </div>
                                    <div class="col-sm">
                                        <main className={classes.main}>
                                            <CssBaseline></CssBaseline>
                                                <Paper className={classes.paper}>
                                                    <Typography component='h5' variant='h6'>Section B</Typography>
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
                                            </main>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                    <Paper className={classes.footerPaper}>
                                            <Button type='submit' href="../dashboard/dashboard.js" fullWidth variant='contained' color = 'primary' className={classes.submit}>dashboard</Button>
                                            <Button type='submit' href="../login/login.js" fullWidth variant='contained' color = 'primary' className={classes.submit}>logout</Button>
                                            <Button type='submit' href="../createcandidates/createcandidates.js" fullWidth variant='contained' color = 'primary' className={classes.submit}>new candidates</Button>
                                    </Paper>
                                    </div>
                                </div> 
                   </div>
        );
    }
}

export default withStyles(styles)(CastVoteComponent);