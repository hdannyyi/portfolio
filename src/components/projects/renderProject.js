import React, { Component } from "react";

class RenderProject extends Component {
    styleClass = () => {
        if (parseInt(this.props.styleId) % 2 === 0) {
            return "projectItem even";
        } else {
            return "projectItem odd";
        }
    };

    render() {
        return (
            <div className={this.styleClass()}>
                <div className="overview-and-pic">
                    <div className="project-overview">
                        <div className="project-title">
                            {this.props.project.title}
                        </div>
                        <div className="description">
                            {this.props.project.description}
                        </div>
                        <div className="stack">
                            Stack: {this.props.project.stack}
                        </div>
                        <div class="links">
                            <a
                                href={this.props.project.githubLink}
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <img
                        src={this.props.project.screenshot}
                        id={this.props.project.cssid}
                        class="project-screenshots"
                    />
                </div>
            </div>
        );
    }
}

export default RenderProject;
