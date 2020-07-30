import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div>
                <section className="wow fadeIn p-0 mobile-height parallax" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(&quot;images/homepage-option18-banner.jpg&quot;);", backgroundPosition: "0px 0px; visibility: visible; animation-name: fadeIn;" }}>
                    <div className="container text-center one-third-screen lg-height-350px md-height-500px sm-height-auto sm-padding-40px-top sm-padding-50px-bottom">
                        <div className="row">
                            <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center one-third-screen lg-height-350px md-height-500px sm-height-auto text-center wow bounceInLeft sm-height-auto sm-margin-30px-bottom" style={{ visibility: "visible", animationName: "bounceInLeft;" }}>
                                <img alt="" src="images/homepage-option18-image.png" data-no-retina="" />
                            </div>
                            <div className="col-12 col-md-9 d-flex flex-column align-items-center justify-content-center one-third-screen lg-height-350px md-height-500px sm-height-auto text-center wow bounceInRight sm-height-auto" style={{ visibility: "visible;", animationName: "bounceInRight;" }}>
                                <div className="font-weight-300 alt-font title-large text-extra-dark-gray d-inline-block align-bottom mx-auto">I'm <span className="font-weight-600 text-bold-underline position-relative">colin smith</span></div>
                                <div className="text-medium-gray text-small text-uppercase margin-40px-top letter-spacing-2 alt-font sm-margin-10px-top">Designer &amp; Frontend Developer</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Banner
