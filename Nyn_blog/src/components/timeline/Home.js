import React, { useEffect, useState, useRef } from "react";
import { Component } from 'react'
import classes from './Home.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
var data = require("../../db/MOCK_DATA.json");

const Home = () => {


    return (
     
      <>
     <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}></span>
          <h2 className={classes.heading}>3 things about me</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>{data.post1_title}</h3>
                <p>{data.post1_content} </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>{data.post2_title}</h3>
                <p>{data.post2_content}</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>{data.post3_title}</h3>
                <p>{data.post3_content} </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
          </>
    );
  };
  export default Home;