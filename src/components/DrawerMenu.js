import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Divider, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@material-ui/core'

class DrawerMenu extends Component {
    render() {
        return (
            <div>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <IconButton href="https://www.linkedin.com/in/c-vidushan" color="inherit">
                                <i class="fab fa-linkedin-in fa-1x"></i>
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconButton href="https://www.github.com/vidjul" color="inherit">
                                <i class="fab fa-github fa-1x"></i>
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconButton href="https://stackoverflow.com/users/9524080/vidushan-chooriyakumaran" color="inherit">
                                <i class="fab fa-stack-overflow fa-1x"></i>
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconButton href="https://www.facebook.com/vidushan.chooriyakumaran" color="inherit">
                                <i class="fab fa-facebook-f fa-1x"></i>
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconButton href="https://www.twitter.com/vidushan_" color="inherit">
                                <i class="fab fa-twitter fa-1x"></i>
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <IconButton href="https://www.instagram.com/vidu.sh" color="inherit">
                                <i class="fab fa-instagram fa-1x"></i>
                            </IconButton>
                        </ListItemIcon>
                    </ListItem>
                </List>
                <Divider />

                <Divider />
            </div>
        )
    }
}

export default DrawerMenu;