import React, { Component } from 'react'

import Dort from '../../assets/myworks/se-04.png';
import Sekiz from '../../assets/myworks/se-08.png';
import OnBir from '../../assets/myworks/se-11.png';
import OnIki from '../../assets/myworks/se-12.png';
import OnUc from '../../assets/myworks/se-13.png';
import Uc from '../../assets/myworks/se-03.png';
import Yedi from '../../assets/myworks/se-07.png';
import Dokuz from '../../assets/myworks/se-09.png';
import OnDort from '../../assets/myworks/se-14.png';


export class AllPortfolio extends Component {
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
                        <div className="portfolio-wrapper">
                            <div className="category-filter">
                                <div className="category-filter-icon"></div>
                            </div>
                            <div className="category-filter-list button-group filters-button-group" style={{ display: "none" }}>
                                <div className="button is-checked" data-filter="*">All</div>
                                <div className="button" data-filter=".webdesigns">Web Designs</div>
                                <div className="button" data-filter=".mobiledesigns">Mobile Designs</div>
                                <div className="button" data-filter=".packaging">Packaging Desings</div>
                                <div className="button" data-filter=".socialmedia">Social Media Posts</div>
                            </div>
                            <div className="grid" id="portfolio" style={{ position: "relative", height: "1400px" }}>
                                <div className="grid-sizer"></div>
                                <div className="grid-item element-item p_one_third socialmedia" style={{ position: "absolute", left: "0%", top: "0px" }}>
                                    <a href="single-portfolio.html">
                                        <img src={Dort} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Alternative BurgerKing Post</p>
                                            <p className="portfolio-cat">Instagram Post</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third webdesigns" style={{ position: "absolute", left: "33.3333", top: "0px" }}>
                                    <a href="single-portfolio.html">
                                        <img src={Sekiz} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Web Design</p>
                                            <p className="portfolio-cat">Basic and Minimal Web Site</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third packaging" style={{ position: "absolute", left: "66.6667%", top: "0px" }}>
                                    <a href="single-portfolio.html">
                                        <img src={OnBir} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Packaging Desing</p>
                                            <p className="portfolio-cat">Coffee and Food Design</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_two_third packaging" style={{ position: "absolute", left: "33.3333%", top: "280px" }}>
                                    <a href="single-portfolio.html">
                                        <img src={OnIki} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Packaging Desing</p>
                                            <p className="portfolio-cat">Chocolate Desing</p>
                                        </div>
                                    </a>
                                </div>


                                <div className="grid-item element-item p_one_third packaging" style={{ position: "absolute", left: "0%", top: "560px" }}>
                                    <a href="single-portfolio.html">
                                        <img src={OnUc} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Packaging Desing</p>
                                            <p className="portfolio-cat">Food Desing</p>
                                        </div>
                                    </a>
                                </div>


                                <div className="grid-item element-item p_one_third webdesigns" style={{ position: "absolute", left: "0%", top: "840px" }}>
                                    <a href="single-portfolio.html">
                                        <img src={Uc} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Web App</p>
                                            <p className="portfolio-cat">Web Application Desing</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third webdesigns" style={{ position: "absolute", left: "33.3333%", top: "840px" }}>
                                    <a href="#">
                                        <img src={Yedi} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Web App</p>
                                            <p className="portfolio-cat">Web Application Desing</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third mobiledesigns" style={{ position: "absolute", left: "66.6667%", top: "840px" }}>
                                    <a href="single-portfolio.html">
                                        <img src={Dokuz} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Mobile App</p>
                                            <p className="portfolio-cat">Mobile Application Desing</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third webdesigns packaging" style={{ position: "absolute", left: "0%", top: "1120px" }}>
                                    <a href="single-portfolio.html">
                                        <img src={OnDort} alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Portfolio</p>
                                            <p className="portfolio-cat">Text</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllPortfolio
