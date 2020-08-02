import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="menu-left-part">
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
        )
    }
}

export default Footer
