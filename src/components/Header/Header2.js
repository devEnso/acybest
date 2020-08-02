import React, { Component } from 'react'

export class Header2 extends Component {
    render() {
        return (
            <div>
                <div className="menu-left-part">
                    <nav id="header-main-menu">
                        <ul className="main-menu sm sm-clean" data-smartmenus-id="1596282749427014">
                            <li><a href="index.html" className="current">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <footer>
                        <div className="footer-info">
                            <p className="footer-social">
                                <a href="#"><span className="fa fa-facebook"></span></a>
                                <a href="#"><span className="fa fa-twitter"></span></a>
                                <a href="#"><span className="fa fa-behance"></span></a>
                            </p>
                            <p className="footer-text">© 2018 Ocularus Template by <a href="https://cocobasic.com">CocoBasic</a></p>
                        </div>
                    </footer>
                </div>
                <div class="menu-right-part">
                    <div class="toggle-holder">
                        <div id="toggle" class="">
                            <div class="menu-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header2
