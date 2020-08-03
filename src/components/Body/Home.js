import React, { Component } from 'react'
import DragScrollProvider from 'drag-scroll-provider'
import './styles.css'

import Dort from '../../assets/myworks/se-04.png';
import Sekiz from '../../assets/myworks/se-08.png';
import OnBir from '../../assets/myworks/se-11.png';
import OnIki from '../../assets/myworks/se-12.png';
import OnUc from '../../assets/myworks/se-13.png';
import Uc from '../../assets/myworks/se-03.png';
import Yedi from '../../assets/myworks/se-07.png';
import Dokuz from '../../assets/myworks/se-09.png';
import OnDort from '../../assets/myworks/se-14.png';

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
                                                <div className="acyImage overflowhide scrollable flickity-slider" ref={ref} onMouseDown={onMouseDown} style={{ width: "100%", overflowX: "scroll", display: "flex" }}>
                                                    <div className="carousel-cell">
                                                        <img src={OnUc} alt="" />
                                                        <p className="post-num">05</p>
                                                        <h3 className="entry-title"><a href="single.html">Food Design</a></h3>
                                                        <p className="cat-links">Packaging Design</p>
                                                    </div>
                                                    <div className="carousel-cell">
                                                        <img src={OnIki} alt="" />
                                                        <p className="post-num">04</p>
                                                        <h3 className="entry-title"><a href="single.html">Chocolate Design</a></h3>
                                                        <p className="cat-links">Packaging Design</p>
                                                    </div>
                                                    <div className="carousel-cell">
                                                        <img src={OnBir} alt="" />
                                                        <p className="post-num">03</p>
                                                        <h3 className="entry-title"><a href="single.html">Coffee and Food Design</a></h3>
                                                        <p className="cat-links">Packaging Design</p>
                                                    </div>
                                                    <div className="carousel-cell">
                                                        <img src={Dokuz} alt="" />
                                                        <p className="post-num">02</p>
                                                        <h3 className="entry-title"><a href="single.html">Mobile Application</a></h3>
                                                        <p className="cat-links">Mobile Design</p>
                                                    </div>  
                                                    <div className="carousel-cell">
                                                        <img src={Sekiz} alt="" />
                                                        <p className="post-num">01</p>
                                                        <h3 className="entry-title"><a href="single.html">Web Application</a></h3>
                                                        <p className="cat-links">Web Design</p>
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
