import { Route } from "react-router-dom";
import Header from "./views/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Main from "./views/Main";
import Footer from "./views/Footer"

const App = () => {
  

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
export default App;