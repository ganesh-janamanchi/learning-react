import React from "react";
import NavBar from "./Navbar";
import Footer from "./footer";
import JumbotronSection from "./jumbotronSection";
import FeatureSection from "./FeatureSection";
import CardSection from "./cardSection";

var App = () => {
    return (
        <div>
            <NavBar/>
            <JumbotronSection/>
            <FeatureSection/>
            <CardSection />
            <Footer/>
        </div>
    )
}

export default App;