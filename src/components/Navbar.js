import React from 'react';
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () =>{
    return(
        <div>
            <Appbar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">Course finder</Typography>
                </Toolbar>
            </Appbar>
        </div>
    )
}

export default Navbar;