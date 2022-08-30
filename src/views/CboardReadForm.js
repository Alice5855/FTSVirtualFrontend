import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import CBoardServices from "./CBoardServices";

class CboardReadForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            btitle: "",
            bwriter: "",
            btext: "",
            bnum: props.match.params.bnum,
            bregDate: ""
        };
        console.log(this.state.bnum);
        this.getBoardData(this.state.bnum); // 이거 실행 안되면 바인드시켜보기
    }

    getBoardData(bnum){
        console.log("겟보드데이터 실행")
        CBoardServices.getBoardData(bnum).then((res)=>{
            this.setState({
                // 0829 여기까지했음.
            })
        })
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