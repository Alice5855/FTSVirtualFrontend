import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "reactstrap";
import CBoardServices from "./CBoardServices";
import CBoardCUD from "./CBoardCUD";

const {Provider, Consumer} = React.createContext();

export {Consumer};



class CboardReadForm extends Component {
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
        this.getBoardData(this.state.bnum); // 이거 실행 안되면 바인드시켜보기
    }
   

    getBoardData(bnum){
        console.log("겟보드데이터 실행")
        CBoardServices.getBoard(bnum).then((res)=>{
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
                <Card className="px-5 py-5">
                    <div>
                        <div>
                            <p>
                                Writer
                            </p>
                            <div>
                                {this.state.bwriter}
                            </div>
                        </div>
                        <div>
                            <p>Title</p>
                            <div>
                                {this.state.btitle}
                            </div>
                        </div>
                        <div>
                            <p>Content</p>
                                <div>
                                    {this.state.btext}
                                </div>
                        </div>
                        <div>
                            <p>RegDate</p>
                                {this.state.bregDate}
                        </div>
                    </div>
                </Card>
                <div className="mt-5">
                    <Link to={"/Community"}>
                        <Button className="btn-info float-end">
                            리스트
                        </Button>
                    </Link>
                
                   
                        <Link to={"/Community/crudUpdate"}>
                                
                                    수정하기
                                
                        </Link>
                
                </div>
            </div>
        )
    }
}
export default CboardReadForm;