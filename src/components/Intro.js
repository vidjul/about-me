import React, { Component } from "react";
import "./Intro.css";
import Typography from '@material-ui/core/Typography';

class Intro extends Component {

    render() {
        return (
            <section className="intro">
                <Typography variant="display3" gutterBottom>
                    Hey !
                </Typography>
            </section>
        );
    }
}

export default Intro;