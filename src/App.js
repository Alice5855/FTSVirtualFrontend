import { Route } from "react-router-dom";
import Header from "./views/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Main from "./views/Main";
import Footer from "./views/Footer";
import Nboard from "./views/Nboard";
import CBoard from "./views/CBoard"; 
import ViewButton from "./views/ViewButton"
import InputForm from "./views/InputForm";
import CBoardComponent from "./views/CBoardComponent";

const App = () => {
  

  return (
    <>
      <Header />
      <div id="spaceFiller" style={{height: '10vh'}}></div>
      <Route path = "/" component = {Main} exact={true} />
      {/* exact 속성을 state에 붙임. url이 정확히 '/'일 때만 Main component를 표시 */}
      <Route path = "/Notice" component={Nboard} />
    
      <Route path = "/Community" component={CBoardComponent} />

      

      

      
      
      
      <Footer />
    </>
  );
};
export default App;