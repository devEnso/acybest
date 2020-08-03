import React, { Component } from 'react'
import DragScrollProvider from 'drag-scroll-provider'
import './styles.css'

export class Home extends Component {
    render() {
        return (
            <div>
                <div id="content" className="site-content">

                    <div className="content-left">
                        <div className="content-left-holder">
                            <div className="welcome-content">
                                <img className="welcome-image" src="images/background.png" alt="" />
                                <h1 className="acy-logo">
                                    <a href="index.html">
                                        <img src="images/acylogo2x.png" alt="Ocularus" />
                                    </a>
                                </h1>
                                <div className="site-description">
                                    merhaba,<br />
                                    benim adım Ahmet Can Yılmaz ve <br />
                                    Istanbul'da yaşayan bir Grafik Tasarımcıyım.
                                    <br />
                                    <br />
                                    <p>+90 545 914 6622</p>
                                    <p>
                                        <a href="mailto:ahmetcy17@gmail.com">ahmetcy17@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="slider-wrapper">
                            <div className="carousel-slider">
                                <div className="carousel flickity-enabled is-draggable" tabindex="0">
                                    <div className="flickity-viewportx" style={{ display: "contents", height: "695px" }}>
                                        <DragScrollProvider className="scroll-container">
                                            {({ onMouseDown, ref }) => (
                                                <div className="overflowhide scrollable flickity-slider" ref={ref} onMouseDown={onMouseDown} style={{ width: "100%", overflowX: "scroll" }}>
                                                    <div className="carousel-cell" style={{ position: "absolute", left: "0%" }}>
                                                        <img src="images/img_01.jpg" alt="" />
                                                        <p className="post-num">05</p>
                                                        <h3 className="entry-title"><a href="single.html">Another Day at Work</a></h3>
                                                        <p className="cat-links">Office</p>
                                                    </div>
                                                    <div className="carousel-cell" style={{ position: "absolute", left: "43.46%" }}>
                                                        <img src="images/animation.gif" alt="" />
                                                        <p className="post-num">04</p>
                                                        <h3 className="entry-title"><a href="single.html">Coco Basic Gif</a></h3>
                                                        <p className="cat-links">Animation</p>
                                                    </div>
                                                    <div className="carousel-cell" style={{ position: "absolute", left: "114.57%" }}>
                                                        <img src="images/img_03.jpg" alt="" />
                                                        <p className="post-num">03</p>
                                                        <h3 className="entry-title"><a href="single.html">Branding at the Best</a></h3>
                                                        <p className="cat-links">Inspiration</p>
                                                    </div>
                                                    <div className="carousel-cell" style={{ position: "absolute", left: "165.93%" }}>
                                                        <img src="images/img_04.jpg" alt="" />
                                                        <p className="post-num">02</p>
                                                        <h3 className="entry-title"><a href="single.html">Lets Do This</a></h3>
                                                        <p className="cat-links">Free Art</p>
                                                    </div>
                                                    <div className="carousel-cell" style={{ position: "absolute", left: "208.2%" }}>
                                                        <img src="images/img_05.jpg" alt="" />
                                                        <p className="post-num">01</p>
                                                        <h3 className="entry-title"><a href="single.html">Homes Magazine</a></h3>
                                                        <p className="cat-links">Interior</p>
                                                    </div>
                                                </div>
                                            )}
                                        </DragScrollProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default Home