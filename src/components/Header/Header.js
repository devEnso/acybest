import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { show: true }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        const { show } = this.state;
        this.setState({ show: !show });
    }

    render() {
        return (
            <header>

                <nav className="navbar navbar-default bootsnav bg-transparent navbar-top navbar-transparent-no-sticky on no-full">
                    <div className="container-fluid nav-header-container height-100px padding-three-half-lr sm-height-70px sm-padding-15px-lr">

                        <div className="col d-none d-md-block text-left pl-0">
                            <div className="social-icon">
                                <a href="https://www.facebook.com/" title="Facebook" target="_blank"><i className="fab fa-facebook-f text-extra-dark-gray" aria-hidden="true"></i></a>
                                <a href="https://twitter.com/" title="Twitter" target="_blank"><i className="fab fa-twitter text-extra-dark-gray"></i></a>
                                <a href="https://dribbble.com/" title="Dribbble" target="_blank"><i className="fab fa-dribbble text-extra-dark-gray"></i></a>
                            </div>
                        </div>

                        <div className="col text-md-center pl-0 pl-md-3">
                            <a className="logo" href="index.html"><img src="images/logo.png" data-rjs="images/logo@2x.png" className="default" alt="Pofo" /></a>
                        </div>

                        <div className="col text-right pr-0">
                            <div className={this.state.show ? "hamburger-menu" : "hamburger-menu show-menu"} onClick={this.toggleMenu}>
                                <div className="btn btn-hamburger border-none">
                                    <button className="navbar-toggler mobile-toggle" type="button" id="open-button" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                                <div className="hamburger-menu-wrepper sm-text-center">
                                    <div className="hamburger-logo text-left"><a className="logo" href="index.html"><img src="images/logo-white.png" data-rjs="images/logo-white@2x.png" alt="Pofo" /></a></div>
                                    <div className="btn btn-hamburger border-none">
                                        <button className="close-menu close-button-menu" id="close-button"></button>
                                    </div>
                                    <div className="animation-box">
                                        <div className="menu-middle">
                                            <div className="menu-wrapper d-table-cell align-middle text-left">
                                                <div className="d-md-flex">
                                                    <div className="col-lg-8 col-md-7 d-flex align-items-center">
                                                        <ul className="hamburger-menu-links alt-font">
                                                            <li><a href="home-classNameic-corporate.html" title="Home">Home</a></li>
                                                            <li><a href="about-me.html" title="Pages">Pages</a></li>
                                                            <li><a href="portfolio-full-width-grid-overlay.html" title="Portfolio">Portfolio</a></li>
                                                            <li><a href="blog-standard-full-width.html" title="Blog">Blog</a></li>
                                                            <li><a href="accordions.html" title="Contact">Elements</a></li>
                                                            <li><a href="transparent-header.html" title="Shortcode">Features</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-4 col-md-5 d-flex align-items-center social-style-3">
                                                        <div className="width-100">
                                                            <span className="text-extra-large text-deep-pink alt-font d-block margin-15px-bottom">London Based Creative Studio</span>
                                                            <span className="text-medium alt-font d-block font-weight-300 margin-15px-bottom line-height-30">301 The Greenhouse,<br />Custard Factory, London, E2 8DY.<br />Call - +44 (0) 123 456 7890<br />Email -
                                                        <a href="mailto:info@domain.com" className="text-white-2" target="_blank"> info@domain.com</a>
                                                            </span>
                                                            <div className="separator-line-horrizontal-medium-light2 bg-deep-pink margin-25px-tb sm-margin-15px-tb d-inline-block"></div>
                                                            <div className="social-icon-style-9">
                                                                <ul className="small-icon">
                                                                    <li><a className="margin-20px-right facebook" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                                                    <li><a className="margin-20px-right twitter" href="http://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                                                    <li><a className="margin-20px-right google" href="http://google.com" target="_blank"><i className="fab fa-google-plus-g"></i></a></li>
                                                                    <li><a className="margin-20px-right dribbble" href="http://dribbble.com" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                                                                    <li><a className="inkedin" href="http://linkedin.com" target="_blank">
                                                                        <i className="fab fa-linkedin-in"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>

            </header>
        )
    }
}

export default Header
