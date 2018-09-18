import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Grid } from '@material-ui/core';

class MenuBar extends Component {
    render() {
        return (
                <AppBar>
                    <Toolbar>
                        <Grid container justify="center">
                            <IconButton href="https://www.linkedin.com/in/c-vidushan" color="inherit">
                                <i className="fab fa-linkedin-in fa-1x"></i>
                            </IconButton>
                            <IconButton href="https://www.github.com/vidjul" color="inherit">
                                <i className="fab fa-github fa-1x"></i>
                            </IconButton>
                            <IconButton href="https://stackoverflow.com/users/9524080/vidushan-chooriyakumaran" color="inherit">
                                <i className="fab fa-stack-overflow fa-1x"></i>
                            </IconButton>
                            <IconButton href="https://www.facebook.com/vidushan.chooriyakumaran" color="inherit">
                                <i className="fab fa-facebook-f fa-1x"></i>
                            </IconButton>
                            <IconButton href="https://www.twitter.com/vidushan_" color="inherit">
                                <i className="fab fa-twitter fa-1x"></i>
                            </IconButton>
                            <IconButton href="https://www.instagram.com/vidu.sh" color="inherit">
                                <i className="fab fa-instagram fa-1x"></i>
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
        );
    }
}

export default MenuBar;