import axios from "axios";

const CBOARD_API_BASE_URL = "Cboard/getList.do"

class BoardServices{

    getBoardPage(pageNum){
        console.log("getBoardPage 작동 : " +pageNum );
        return axios.get(CBOARD_API_BASE_URL + "?pageNum=" + pageNum);
    }

}
export default new BoardServices();