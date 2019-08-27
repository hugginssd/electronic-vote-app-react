import React from 'react';
import {withStyles, Typography} from '@material-ui/core'
import styles from './style'
// import Typography from '@material-ui/core/Typography'

class NavBarComponent extends React.Component{

    render(){
        return(
            <div>
                  <nav  class="navbar sticky-top navbar-expand-lg navbar-light bg-primary text-white">
                            <a class="navbar-brand text-white"   href="/dashboard">E-voting</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="/dashboard">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/createcandidates">New candidates</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/castvote">Cast vote</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/howtovote">How to vote?</a>
                                </li>
                                </ul>
                            </div>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-white text-white my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            </nav>
            </div>
        );
    }
}

export default withStyles(styles)(NavBarComponent);