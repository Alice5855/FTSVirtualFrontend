import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";

class CboardReadForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            List: [],
            currentPage: 1,
            maxPage: 0
        };
        console.log("리드폼 들어왔음@@@");
    }

    render(){
        return(
            <div className="container-fluid readBody px-5 my-5">
                <Card className="px-5 py-5">
                    <div>
                        <div>
                            여기는 readForm이다~!!!!
                        </div>
                        <div>
                            <p>Title</p>
                        </div>
                        <div>
                            <p>Content</p>
                        </div>
                        <div>
                            <p>RegDate</p>
                        </div>
                    </div>
                </Card>
                <div className="mt-5">
                    <Link to={"/Notice"}>
                        <Button className="btn-info float-end">
                            리스트
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default CboardReadForm;