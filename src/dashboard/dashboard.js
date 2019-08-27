import React from 'react'
import styles from './style'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import NavBarComponent from '../navbar/navbar'
import Paper from '@material-ui/core/Paper'
import {FormControl, Button, CssBaseline, Divider } from '@material-ui/core';

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
                            <main className={classes.alert}>
                                <div class="alert alert-primary" role="alert">
                                    Presidential Election results—check it out!
                                </div>
                            </main>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <Typography className={classes.typography} component="h4" variant="h5" color='primary'>
                                        <strong>Presidential Results</strong>
                                    </Typography>
                                </main>
                            </div>
                            {/* Successful candidate */}
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <div class="card text-white bg-success mb-3" fullWidth>
                                        <div class="card-header">1745 votes</div>
                                        <div class="card-body">
                                            <h6 class="card-title">Tinashe Muyengwa</h6>
                                            <p class="card-text">3rd contestant.</p>
                                        </div>
                                    </div>
                                    {/* <Paper className={classes.paperSuccess}>
                                        <form className={classes.form}>
                                            
                                        </form>
                                    </Paper> */}
                                </main>
                            </div>
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <div class="card text-white bg-warning mb-3" fullWidth>
                                        <div class="card-header">743 votes</div>
                                        <div class="card-body">
                                            <h6 class="card-title">Elizabeth Madziire</h6>
                                            <p class="card-text">1st contestant.</p>
                                        </div>
                                    </div>
                                    {/* <Paper className={classes.paper}>
                                        <form className={classes.form}>
                                            
                                        </form>
                                    </Paper> */}
                                </main>
                            </div>
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <div class="card text-white bg-danger mb-3" fullWidth>
                                        <div class="card-header">245 votes</div>
                                        <div class="card-body">
                                            <h6 class="card-title">Marvellous Mathew</h6>
                                            <p class="card-text">4th contestant.</p>
                                        </div>
                                    </div>
                                    {/* <Paper className={classes.paper}>
                                        <form className={classes.form}>

                                        </form>
                                    </Paper> */}
                                </main>
                            </div><div class="col-sm">
                                <main className={classes.main}>
                                    <div class="card text-dark mb-3" fullWidth>
                                        <div class="card-header">172 votes</div>
                                        <div class="card-body">
                                            <h6 class="card-title">Larry Page</h6>
                                            <p class="card-text">2nd contestant.</p>
                                        </div>
                                    </div>
                                    {/* <Paper className={classes.paper}>
                                        <form className={classes.form}>

                                        </form>
                                    </Paper> */}
                                </main>
                            </div>
                        </div>
                        <Divider className={classes.divider}></Divider>
                        <div class="row">
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <Typography className={classes.typography} component="h4" variant="h5" color='primary'>
                                        <strong>Secretary Results</strong>
                                    </Typography>
                                </main>
                            </div>
                            {/* Successful candidate */}
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <div class="card text-white bg-success mb-3" fullWidth>
                                        <div class="card-header">1745 votes</div>
                                        <div class="card-body">
                                            <h6 class="card-title">Tinashe Muyengwa</h6>
                                            <p class="card-text">3rd contestant.</p>
                                        </div>
                                    </div>
                                    {/* <Paper className={classes.paperSuccess}>
                                        <form className={classes.form}>
                                            
                                        </form>
                                    </Paper> */}
                                </main>
                            </div>
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <div class="card text-white bg-warning mb-3" fullWidth>
                                        <div class="card-header">743 votes</div>
                                        <div class="card-body">
                                            <h6 class="card-title">Elizabeth Madziire</h6>
                                            <p class="card-text">1st contestant.</p>
                                        </div>
                                    </div>
                                    {/* <Paper className={classes.paper}>
                                        <form className={classes.form}>
                                            
                                        </form>
                                    </Paper> */}
                                </main>
                            </div>
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <CssBaseline></CssBaseline>
                                    <div class="card text-white bg-danger mb-3" fullWidth>
                                        <div class="card-header">245 votes</div>
                                        <div class="card-body">
                                            <h6 class="card-title">Marvellous Mathew</h6>
                                            <p class="card-text">4th contestant.</p>
                                        </div>
                                    </div>
                                    {/* <Paper className={classes.paper}>
                                        <form className={classes.form}>

                                        </form>
                                    </Paper> */}
                                </main>
                            </div>
                            <div class="col-sm">
                                <main className={classes.main}>
                                    <div class="card text-dark mb-3" fullWidth>
                                        <div class="card-header">172 votes</div>
                                        <div class="card-body">
                                            <h6 class="card-title">Larry Page</h6>
                                            <p class="card-text">2nd contestant.</p>
                                        </div>
                                    </div>
                                    {/* <Paper className={classes.paper}>
                                        <form className={classes.form}>

                                        </form>
                                    </Paper> */}
                                </main>
                            </div>
                        </div>
                        
                    </div>
        </div>
        );
    }

}

export default withStyles(styles)(DashboardComponent);