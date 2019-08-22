import React from 'react';
import {withStyles} from '@material-ui/core'
import styles from '@material-ui/core/styles'

class NavBarComponent extends React.Component{

    render(){
        return(
            <div>Hello from NavBarComponent</div>
        );
    }
}

export default withStyles(styles)(NavBarComponent);