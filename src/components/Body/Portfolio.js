import React, { useState, useEffect } from "react";
import { portfolio } from './Projects';

export function Portfolio() {
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);
    return (
        <div>
            <section className="wow fadeIn p-0" style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="portfolio-filter nav nav-tabs justify-content-center border-0 portfolio-filter-tab-1 font-weight-600 alt-font text-uppercase text-center margin-80px-bottom text-small md-margin-40px-bottom sm-margin-20px-bottom">
                                <li className="nav active"> <a href="/#" active={filter === "all"} onClick={() => setFilter("all")} className="light-gray-text-link text-very-small">
                                    All
                                </a>
                                </li>

                                <li className="nav active"> <a href="/#"
                                    active={filter === "frontend"}
                                    onClick={() => setFilter("frontend")} className="light-gray-text-link text-very-small">
                                    Frontend
                                </a>
                                </li>
                                <li className="nav active"> <a href="/#" active={filter === "all"} href="/#"
                                    active={filter === "mobile"}
                                    onClick={() => setFilter("mobile")} className="light-gray-text-link text-very-small">
                                    Mobile
                                </a>
                                </li>
                                <li className="nav active"> <a href="/#"
                                    active={filter === "ux-ui"}
                                    onClick={() => setFilter("ux-ui")} className="light-gray-text-link text-very-small">
                                    UX-UI
                                </a>
                                </li>
                                <li className="nav active"> <a href="/#"
                                    active={filter === "others"}
                                    onClick={() => setFilter("others")} className="light-gray-text-link text-very-small">
                                    Others
                                </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 px-3 p-md-0">
                            <div className="filter-content overflow-hidden">
                                {projects.map(item =>
                                    item.filtered === true ?
                                        <ul className="portfolio-grid portfolio-metro-grid work-4col hover-option8 gutter-medium" style={{ position: "relative", height: "1940.47px" }}>
                                            <li className="grid-sizer" style={{ position: "absolute", left: "0%", top: "0px" }}></li>

                                            <li className="grid-item advertising design fadeInUp" style={{ position: "absolute", left: "0%", top: "0px", visibility: "visible", animationName: "fadeInUp" }}>

                                                <a href="single-project-page-01.html">

                                                    <figure>
                                                        <div className="portfolio-img">
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                        <figcaption>
                                                            <div className="portfolio-hover-main">
                                                                <div className="portfolio-hover-box align-middle">
                                                                    <span key={item.name} className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">{item.name}</span>
                                                                    <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                                                    <p className="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                                                                </div>
                                                            </div>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </li>
                                        </ul>
                                        : ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Portfolio
