import React, { Component } from "react";
import ReactTube from "./ReactTube"
import "./Main.css";
import Card1 from "./Card1";
import { ParallaxProvider } from "react-scroll-parallax";
import Card2 from "./Card2";


class Main extends Component {
    render() {
        return(
            <>
                <div className="container-fluid">
                    <ReactTube />
                    <ParallaxProvider>
                        <div className="d-flex row py-5 cardWrapper">
                            <Card1 />
                        </div>
                        <div className="d-flex row py-5 cardWrapper">
                            <Card2 />
                        </div>
                    </ParallaxProvider>
                </div>
            </>
        )
    }
}
export default Main;