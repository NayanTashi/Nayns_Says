import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
var data = require("./../../db/MOCK_DATA.json");

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Nayn is DC this IPL</h2>
                    <div className={classes.About}>
                        <p> My name is <b>Nayan Tashi</b> {data.about_me}  </p>
                        <p className={classes.br}> 
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;