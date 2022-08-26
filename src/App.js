import { Route } from "react-router-dom";
import Header from "./views/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Main from "./views/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
export default App;