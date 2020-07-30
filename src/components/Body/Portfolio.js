import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="wow fadeIn p-0" style="visibility: visible; animation-name: fadeIn;">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <!-- start filter navigation -->
                        <ul className="portfolio-filter nav nav-tabs justify-content-center border-0 portfolio-filter-tab-1 font-weight-600 alt-font text-uppercase text-center margin-80px-bottom text-small md-margin-40px-bottom sm-margin-20px-bottom">
                            <li className="nav active"><a href="javascript:void(0);" data-filter="*" className="light-gray-text-link text-very-small">All</a></li>
                            <li className="nav"><a href="javascript:void(0);" data-filter=".web" className="light-gray-text-link text-very-small">Web</a></li>
                            <li className="nav"><a href="javascript:void(0);" data-filter=".advertising" className="light-gray-text-link text-very-small">Advertising</a></li>
                            <li className="nav"><a href="javascript:void(0);" data-filter=".branding" className="light-gray-text-link text-very-small">Branding</a></li>
                            <li className="nav"><a href="javascript:void(0);" data-filter=".design" className="light-gray-text-link text-very-small">Design</a></li>
                            <li className="nav"><a href="javascript:void(0);" data-filter=".photography" className="light-gray-text-link text-very-small">Photography</a></li>
                        </ul>                                                                           
                        <!-- end filter navigation -->
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-3 p-md-0">
                        <div className="filter-content overflow-hidden">
                            <ul className="portfolio-grid portfolio-metro-grid work-4col hover-option8 gutter-medium" style="position: relative; height: 1940.47px;">
                                <li className="grid-sizer" style="position: absolute; left: 0%; top: 0px;"></li>
                                <!-- start portfolio item -->
                                <li className="grid-item advertising design fadeInUp" style="position: absolute; left: 0%; top: 0px; visibility: visible; animation-name: fadeInUp;">
                                    <a href="single-project-page-01.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image8.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Tailoring Interior</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start  portfolio item -->
                                <li className="grid-item fadeInUp web branding photography" data-wow-delay="0.2s" style="position: absolute; left: 25%; top: 0px; visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                    <a href="single-project-page-02.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image9.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Educamp School</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Identity</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li className="grid-item grid-item-double design fadeInUp" data-wow-delay="0.4s" style="position: absolute; left: 50%; top: 0px; visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                                    <a href="single-project-page-03.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image10.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Pixflow Studio</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li className="grid-item grid-item-double branding web fadeInUp" style="position: absolute; left: 0%; top: 322.25px; visibility: visible; animation-name: fadeInUp;">
                                    <a href="single-project-page-04.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image11.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Banana Design</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Logo and Identity</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li className="grid-item grid-item-double advertising fadeInUp" data-wow-delay="0.2s" style="position: absolute; left: 50%; top: 644.5px; visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                    <a href="single-project-page-05.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image12.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Third Eye Glasses</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Web and Photography</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li className="grid-item grid-item-double web photography fadeInUp" data-wow-delay="0.4s" style="position: absolute; left: 0%; top: 647.984px; visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                                    <a href="single-project-page-06.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image13.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Violator Series</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Web and Photography</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li className="grid-item grid-item-double branding photography fadeInUp" style="position: absolute; left: 50%; top: 1289px; visibility: visible; animation-name: fadeInUp;">
                                    <a href="single-project-page-07.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image14.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Tailoring Interior</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->                                
                                <li className="grid-item fadeInUp web design" data-wow-delay="0.2s" style="position: absolute; left: 0%; top: 1292.48px; visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                    <a href="single-project-page-08.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image15.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Designblast Inc</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start  portfolio item -->
                                <li className="grid-item fadeInUp branding advertising" data-wow-delay="0.4s" style="position: absolute; left: 25%; top: 1292.48px; visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                                    <a href="single-project-page-01.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image16.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">HardDot Stone</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Web and Photography</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li className="grid-item grid-item-double web photography fadeInUp" style="position: absolute; left: 0%; top: 1614.73px; visibility: visible; animation-name: fadeInUp;">
                                    <a href="single-project-page-02.html">
                                        <figure>
                                            <div className="portfolio-img"><img src="images/portfolio-image17.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div className="portfolio-hover-main">
                                                    <div className="portfolio-hover-box align-middle"> 
                                                        <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Crop Identity</span>
                                                        <p className="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item --> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default Portfolio
