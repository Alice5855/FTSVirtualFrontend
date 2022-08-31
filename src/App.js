import { Route } from "react-router-dom";
import Header from "./views/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Main from "./views/Main";
import Footer from "./views/Footer";
import Nboard from "./views/Nboard";
import QBoardComponent from "./views/QBoardComponent";
import CBoardComponent from "./views/CBoardComponent";
import About from "./views/About";

const App = () => {
  

  return (
    <>
      <Header />
      <div id="spaceFiller" style={{height: '10vh'}}></div>
      <Route path = "/" component = {Main} exact={true} />
      {/* exact 속성을 state에 붙임. url이 정확히 '/'일 때만 Main component를 표시 */}
      <Route path = "/Notice" component={Nboard} />
      <Route path = "/Community" component={CBoardComponent} />
      <Route path={'/About'} component={About} />
      <Route path="/QnA" component={QBoardComponent} />
      <Footer />
    </>
  );
};
export default App;