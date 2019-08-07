import React, { Component } from "react";
import RenderProject from "./projects/renderProject";
import { projectList } from "./projects/projectList";
import Slider from "react-slick";

class Portfolio extends Component {
    render() {
        const settings = {
            dots: true,
            slidesToShow: 1,
            speed: 500,
            arrows: true,
            fade: true,
            cssEase: "linear"
        };
        return (
            <div className="portfolio">
                <div className="section-header">Projects</div>
                <Slider {...settings}>
                    {projectList.map((project, i) => {
                        return (
                            <RenderProject
                                project={project}
                                styleId={i + 1}
                                key={i}
                            />
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

export default Portfolio;
