import React, { Component } from 'react'
import VCD from '../../assets/vcd.pdf'

export class About extends Component {
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
                        <div className="content-right-holder">
                            <div className="header-page-content">
                                <div className="fluid-width-video-wrapper" style={{ paddingTop: "56.25%" }}><iframe src="https://player.vimeo.com/video/185237076?color=ffffff" allowfullscreen="" name="fitvid0"></iframe></div>
                            </div>
                            <div className="one_fourth">
                                <div className="progress_bar ">
                                    <div className="progress_bar_title">dil</div>
                                    <div className="progress_bar_field_holder">
                                        <div className="progress_bar_field_perecent" style={{ width: "70%" }}></div>
                                    </div>
                                </div>
                                <div className="progress_bar ">
                                    <div className="progress_bar_title">dil</div>
                                    <div className="progress_bar_field_holder">
                                        <div className="progress_bar_field_perecent" style={{ width: "95%" }}></div>
                                    </div>
                                </div>
                                <div className="progress_bar ">
                                    <div className="progress_bar_title">dil</div>
                                    <div className="progress_bar_field_holder">
                                        <div className="progress_bar_field_perecent" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                                <div className="progress_bar ">
                                    <div className="progress_bar_title">dil</div>
                                    <div className="progress_bar_field_holder">
                                        <div className="progress_bar_field_perecent" style={{ width: "65%" }}></div>
                                    </div>
                                </div>
                            </div>


                            <div className="three_fourth last">
                                <h1 className="entry-title">
                                    Ben ACY
                                </h1>
                                <div className="entry-content">
                                    <p>
                                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                    </p>
                                    <br />
                                    <p>
                                        So yetty aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, <a href="#"><i><b>nascetur ridiculus mus</b></i></a>. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                                    </p>
                                    <br />
                                    <p>
                                        <a href={VCD} className="read-more">VCD görüntüle veya indir</a>
                                    </p>
                                </div>
                            </div>
                            <div className="clear"></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
