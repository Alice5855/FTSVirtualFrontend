import { Route } from "react-router-dom";
import Header from "./views/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Main from "./views/Main";
import Footer from "./views/Footer";
import Nboardlist from "./views/Nboardlist";

const App = () => {
  

  return (
    <>
      <Header />
      <div id="spaceFiller" style={{height: '10vh'}}></div>
      <Route path = "/" component = {Main} />
      <Route path = "/Notice" component={Nboardlist} />
      <Footer />
    </>
  );
};
export default App;