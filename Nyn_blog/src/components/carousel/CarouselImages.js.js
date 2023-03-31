import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa'
import Hello from '../images/jsnow.jpeg'
import Book from '../images/book.jpeg'
import Movie1 from '../images/fanaa.jpeg'
import Book1 from '../images/hmary.jpeg'
import Movie2 from '../images/om.jpeg'
import Movie3 from '../images/Movie3.jpeg'
import Quote2 from '../images/Maattrraan.jpeg'
import Ipl from '../images/dexter.jpeg'


class CarouselImages extends Component {
    render() {
        return (
            <div className={classes.carousel_container} id="start">
                {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={3000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                <div className={classes.image_container}>
                        <img className={classes.image} src={Book} alt="myImage" />
                        <div className={classes.h1}>
                        <a href="https://goodreads.com/user/show/164292027-nayn" rel="opener noreferrer" target="_blank">G-reads<FaArrowCircleDown /></a>
                        </div>
                    </div>
                    <div className={classes.image_container} >
                        <img className={classes.image} src={Hello} alt="myImage" />
                        <div className={classes.h1}>
                            <h1 >Nayn's</h1>
                            <a href="https://letterboxd.com/crowbastard_/" rel="opener noreferrer" target="_blank"> LBD profile   <FaArrowCircleDown /></a>
                        </div>
                    </div>

                    <div className={classes.image_container}>
                        <img className={classes.image} src={Ipl} alt="myImage" />
                        <div className={classes.h2}>
                          
                            <a href="https://twitter.com/CrowBastard_" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject /></a>
                        </div>
                    </div>

                    <div className={classes.image_container}>
                        <img className={classes.image} src={Movie1} alt="myImage" />
                        <div className={classes.h2}>
                           
                           
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={Book1} alt="myImage" />
                        <div className={classes.h1}>
                        <a href="https://goodreads.com/user/show/164292027-nayn" rel="opener noreferrer" target="_blank">Goodreads<FaArrowCircleDown /></a>
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={Movie2} alt="myImage" />
                        <div className={classes.h2}>
                           

                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={Movie3} alt="myImage" />
                        <div className={classes.h2}>
                         
                            <a href="https://twitter.com/CrowBastard_" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject /></a>
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={Quote2} alt="myImage" />
                        <div className={classes.h2}>
                           
                            <a href="https://twitter.com/CrowBastard_" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject /></a>
                        </div>
                    </div>

                    {/* <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div> */}
                </Carousel>
                {/* </ScrollAnimation> */}
            </div>
        )
    }
}
export default CarouselImages