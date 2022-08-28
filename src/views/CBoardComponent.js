import axios from "axios";
import React, { Component } from "react";
import CBoardServices from "./CBoardServices";
import { Link } from "react-router-dom";
import CBoardList from "./CBoardList";

export default function CBoardComponent(){
    return(
        <div>
            <CBoardList />
            <CBoardWriteBtn />
        </div>
    )
}