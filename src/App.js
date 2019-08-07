import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
