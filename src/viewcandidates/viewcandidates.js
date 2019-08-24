import React from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles'


class ViewCandidateComponent extends React.Component{


    render(){
        return(
                <div>
                    Hello from ViewCandidatesComponent
                </div>
        );
    }
}

export default withStyles(styles)(ViewCandidateComponent);