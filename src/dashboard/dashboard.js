import React from 'react'
import styles from './style'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import NavBarComponent from '../navbar/navbar'
import Paper from '@material-ui/core/Paper'
import {FormControl, Button, CssBaseline } from '@material-ui/core';

// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'


class DashboardComponent extends React.Component{

    render(){

        const {classes} = this.props;

        return(
            <div>
                 <NavBarComponent></NavBarComponent> 
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <Typography className={classes.typography} component="h5" variant="h6" color='primary'>Presidential Results</Typography>
                                </main>
                            </div>
                        <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <Paper className={classes.paper}>
                                        <form className={classes.form}>

                                        </form>
                                    </Paper>
                                </main>
                            </div>
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <Paper className={classes.paper}>
                                        <form className={classes.form}>

                                        </form>
                                    </Paper>
                                </main>
                            </div>
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <Paper className={classes.paper}>
                                        <form className={classes.form}>

                                        </form>
                                    </Paper>
                                </main>
                            </div><div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <Paper className={classes.paper}>
                                        <form className={classes.form}>

                                        </form>
                                    </Paper>
                                </main>
                            </div>
                        </div>
                    </div>
        </div>
        );
    }

}

export default withStyles(styles)(DashboardComponent);