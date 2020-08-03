import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {

    refreshPage(){
        window.location.href = "https://acy.best"
    }
    render() {
        return (
            <div>
                <div className="menu-left-part">
                    <nav id="header-main-menu">
                        <ul className="main-menu sm sm-clean" data-smartmenus-id="1596282749427014">
                            <li onClick={this.refreshPage}><Link to={'/'} className="current"> Anasayfa </Link></li>
                            <li><Link to={'/hakkımda'}> Hakkımda </Link></li>
                            <li><Link to={'/portfolio'}> Portfolio </Link></li>
                        </ul>
                    </nav>
                    <footer>
                        <div className="footer-info">
                            <p className="footer-social">
                                <a href="https://www.instagram.com/ahmtcnylmz177/"><span className="fab fa-instagram"></span></a>
                                <a href="https://www.behance.net/ahmetylmz"><span className="fab fa-behance"></span></a>
                            </p>
                            <p className="footer-text">© 2020 ACY Graphic Designer</p>
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

export default Header
