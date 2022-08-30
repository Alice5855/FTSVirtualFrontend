import React, { Component } from "react";
import { Route } from "react-router-dom";
import CboardCUDForm from "./CboardCUD";
import CBoardList from "./CBoardList";
import NboardR from "./NboardR";
import ViewButton from "./ViewButton";



class Cboard extends Component {
    render(){
        return(
            <div className="container-fluid py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="Title" style={{color: '#25C1FF'}}>
                        커뮤니티
                    </h1>
                </div>
                <Route path={"/community"} component={CBoardList} exact={true} />
                <Route path={"/community/Read"} component={NboardR} />
                {/* *****TEMPORARY LINK***** */}
                <Route path={"/community/CUD"} component={CboardCUDForm} />
                {/* *****TEMPORARY LINK***** */}

                
            </div>
        )
    }
}
export default Cboard;