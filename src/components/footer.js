import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-content">
                <div className="social-icons">
                    <a href="mailto:hdannyyi@gmail.com">
                        <i
                            class="fas fa-envelope"
                            style={{
                                fontSize: "18px",
                                margin: "0em 1em",
                                color: "#484545",
                                padding: "0.25em 0em"
                            }}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/danny-yi-40106618a/"
                        target="_blank"
                    >
                        <i
                            className="fab fa-linkedin-in"
                            style={{
                                fontSize: "18px",
                                margin: "0em 1em",
                                color: "#484545",
                                padding: "0.25em 0em"
                            }}
                        />
                    </a>
                    <a href="https://github.com/hdannyyi" target="_blank">
                        <i
                            className="fab fa-github"
                            style={{
                                fontSize: "18px",
                                margin: "0em 1em",
                                color: "#484545",
                                padding: "0.25em 0em"
                            }}
                        />
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
