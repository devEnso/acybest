import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return (
            <div>
                <section class="wow fadeIn p-0" style={{visibility: "visible;", animationName: "fadeIn;"}}>
            <div class="container">
                <div class="row">
                    <div class="col-12">
            
                        <ul class="portfolio-filter nav nav-tabs justify-content-center border-0 portfolio-filter-tab-1 font-weight-600 alt-font text-uppercase text-center margin-80px-bottom text-small md-margin-40px-bottom sm-margin-20px-bottom">
                            <li class="nav active"><a href="javascript:void(0);" data-filter="*" class="light-gray-text-link text-very-small">All</a></li>
                            <li class="nav"><a href="javascript:void(0);" data-filter=".web" class="light-gray-text-link text-very-small">Web</a></li>
                            <li class="nav"><a href="javascript:void(0);" data-filter=".advertising" class="light-gray-text-link text-very-small">Advertising</a></li>
                            <li class="nav"><a href="javascript:void(0);" data-filter=".branding" class="light-gray-text-link text-very-small">Branding</a></li>
                            <li class="nav"><a href="javascript:void(0);" data-filter=".design" class="light-gray-text-link text-very-small">Design</a></li>
                            <li class="nav"><a href="javascript:void(0);" data-filter=".photography" class="light-gray-text-link text-very-small">Photography</a></li>
                        </ul>                                                                           
                       
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 px-3 p-md-0">
                        <div class="filter-content overflow-hidden">
                            <ul class="portfolio-grid portfolio-metro-grid work-4col hover-option8 gutter-medium" style={{position: "relative;", height: "1940.47px;"}}>
                                <li class="grid-sizer" style={{position: "absolute;", left: "0%;", top: "0px;"}}></li>
                              
                                <li class="grid-item advertising design fadeInUp" style={{position: "absolute;", left: "0%;", top: "0px;", visibility: "visible", animationName: "fadeInUp;"}}>
                                    <a href="single-project-page-01.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image8.jpg" alt="" data-no-retina=""/></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Tailoring Interior</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                
                                <li class="grid-item fadeInUp web branding photography" data-wow-delay="0.2s" style={{position: "absolute;", left: "25%;", top: "0px;", visibility: "visible;", animationDelay: "0.2s;", animationName: "fadeInUp;"}}>
                                    <a href="single-project-page-02.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image9.jpg" alt="" data-no-retina="" /></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Educamp School</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Identity</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>

                                <li class="grid-item grid-item-double design fadeInUp" data-wow-delay="0.4s" style={{position: "absolute;", left: "50%;", top: "0px;", visibility: "visible;", animationDelay: "0.4s;", animationName: "fadeInUp;"}}>
                                    <a href="single-project-page-03.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image10.jpg" alt="" data-no-retina="" /></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Pixflow Studio</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
          
                                <li class="grid-item grid-item-double branding web fadeInUp" style={{position: "absolute;", left: "0%;", top: "322.25px;", visibility: "hidden;", animationName: "none;"}}>
                                    <a href="single-project-page-04.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image11.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Banana Design</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Logo and Identity</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li class="grid-item grid-item-double advertising fadeInUp" data-wow-delay="0.2s" style="position: absolute; left: 50%; top: 644.5px; visibility: hidden; animation-delay: 0.2s; animation-name: none;">
                                    <a href="single-project-page-05.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image12.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Third Eye Glasses</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Web and Photography</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li class="grid-item grid-item-double web photography fadeInUp" data-wow-delay="0.4s" style="position: absolute; left: 0%; top: 647.984px; visibility: hidden; animation-delay: 0.4s; animation-name: none;">
                                    <a href="single-project-page-06.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image13.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Violator Series</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Web and Photography</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li class="grid-item grid-item-double branding photography fadeInUp" style="position: absolute; left: 50%; top: 1289px; visibility: hidden; animation-name: none;">
                                    <a href="single-project-page-07.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image14.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Tailoring Interior</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->                                
                                <li class="grid-item fadeInUp web design" data-wow-delay="0.2s" style="position: absolute; left: 0%; top: 1292.48px; visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                                    <a href="single-project-page-08.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image15.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Designblast Inc</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start  portfolio item -->
                                <li class="grid-item fadeInUp branding advertising" data-wow-delay="0.4s" style="position: absolute; left: 25%; top: 1292.48px; visibility: hidden; animation-delay: 0.4s; animation-name: none;">
                                    <a href="single-project-page-01.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image16.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">HardDot Stone</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Web and Photography</p>
                                                    </div>
                                                </div> 
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                <!-- end portfolio item -->
                                <!-- start portfolio item -->
                                <li class="grid-item grid-item-double web photography fadeInUp" style="position: absolute; left: 0%; top: 1614.73px; visibility: hidden; animation-name: none;">
                                    <a href="single-project-page-02.html">
                                        <figure>
                                            <div class="portfolio-img"><img src="images/portfolio-image17.jpg" alt="" data-no-retina=""></div>
                                            <figcaption>
                                                <div class="portfolio-hover-main">
                                                    <div class="portfolio-hover-box align-middle"> 
                                                        <div class="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                        <span class="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">Crop Identity</span>
                                                        <p class="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
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
