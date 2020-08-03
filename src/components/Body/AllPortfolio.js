import React, { Component } from 'react'

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
                                <div className="button" data-filter=".interior">Interior</div>
                                <div className="button" data-filter=".abstract">Abstract</div>
                                <div className="button" data-filter=".industry">Industry</div>
                            </div>
                            <div className="grid" id="portfolio" style={{ position: "relative", height: "1400px" }}>
                                <div className="grid-sizer"></div>
                                <div className="grid-item element-item p_one_third interior" style={{ position: "absolute", left: "0%", top: "0px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_01.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third abstract industry" style={{ position: "absolute", left: "33.3333", top: "0px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_02.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third industry" style={{ position: "absolute", left: "66.6667%", top: "0px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_03.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_two_third abstract interior" style={{ position: "absolute", left: "33.3333%", top: "280px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_04.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
                                        </div>
                                    </a>
                                </div>


                                <div className="grid-item element-item p_one_third industry" style={{ position: "absolute", left: "0%", top: "560px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_05.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
                                        </div>
                                    </a>
                                </div>


                                <div className="grid-item element-item p_one_third abstract interior" style={{ position: "absolute", left: "0%", top: "840px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_06.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third industry" style={{ position: "absolute", left: "33.3333%", top: "840px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_07.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third interior abstract" style={{ position: "absolute", left: "66.6667%", top: "840px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_08.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="grid-item element-item p_one_third interior industry" style={{ position: "absolute", left: "0%", top: "1120px" }}>
                                    <a href="single-portfolio.html">
                                        <img src="images/portfolio_img_09.jpg" alt="" />
                                        <div className="portfolio-text-holder">
                                            <p className="portfolio-text">Smartphone</p>
                                            <p className="portfolio-cat">Interior</p>
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
