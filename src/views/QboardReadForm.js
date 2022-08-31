import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import QBoardServices from "./QBoardServices";
import QBoardCUD from "./QBoardCUD";

const {Provider, Consumer} = React.createContext();

export {Consumer};



class QboardReadForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            bnum : "",
            btitle: "",
            bwriter: "",
            btext: "",
            bnum: props.match.params.bnum,
            bregDate: ""
        };

        console.log(this.state.bnum);
        this.getBoardData(this.state.bnum);
    }

    getBoardData(bnum){
        console.log("겟보드데이터 실행")
        QBoardServices.getBoard(bnum).then((res)=>{
            this.setState({
                bnum:res.data.board.bnum,
                btitle: res.data.board.btitle,
                bwriter: res.data.board.bwriter,
                btext: res.data.board.btext,
                bregDate: res.data.board.bregDate
            })
            console.log(this.state);
        })
        
    }

    render(){
        
        return(
            <div className="container-fluid readBody px-5 my-5">
                <Card className="d-flex px-5 py-5">
                    <div>
                        <div>
                            <h2 className="py-3">
                                    {this.state.btitle}
                            </h2>
                        </div>
                        <div>
                            <div>
                                <div className="py-3 pe-4">
                                    <small className="text-muted float-end">
                                        {this.state.bwriter}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="px-4 py-3">
                                    {this.state.btext}
                                </p>
                            </div>
                        </div>
                        <div>
                            <small className="text-muted float-end py-3">
                                {this.state.bregDate}
                            </small>
                        </div>
                    </div>
                </Card>
                <div className="mt-5">
                    <Link to={"/QnA"}>
                        <Button className="btn-info float-end">
                            리스트
                        </Button>
                    </Link>

                        <Button className="btn-md btn-warning me-3" onClick={() => 
                            this.props.history.push({
                                pathname: "/QnA/crudUpdate",
                                state:{
                                    bnum: this.state.bnum,
                                    btitle: this.state.btitle,
                                    bwriter: this.state.bwriter,
                                    btext: this.state.btext,
                                    bregDate: this.state.bregDate
                                }
                            })
                        }>
                            수정
                        </Button>

                        <Button className="btn-md btn-danger" onClick={() => 
                            this.props.history.push({
                                pathname: "/QnA/crudDelete",
                                state:{
                                    bnum: this.state.bnum,
                                    btitle: this.state.btitle,
                                    bwriter: this.state.bwriter,
                                    btext: this.state.btext,
                                    bregDate: this.state.bregDate
                                }
                            })
                        }>
                            삭제
                        </Button>
                </div>
            </div>
        )
    }
}
export default QboardReadForm;