import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import CBoardServices from "./CBoardServices";
import { Link } from "react-router-dom";
import CBoardList from "./CBoardList";
import CboardCUDForm from "./CboardCUDForm";
import { render } from "@testing-library/react";

class CBoardComponent extends Component {
    render(){
        return(
            <div className="container-fluid py-5 px-5" style={{paddingTop:'30%'}}>
                <div>
                    <h1 className="Title" style={{color: '#25C1FF'}}>
                        공지사항
                    </h1>
                </div>
                <Route path={"/Community"} component={CBoardList} exact={true} />
                {/* <Route path={"/Notice/Read"} component={NboardR} /> */}
                <Route path={"/CboardCUDForm/:crud"} component={CboardCUDForm} />
            </div>
        )
    }
}
export default CBoardComponent;