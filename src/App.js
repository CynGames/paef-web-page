import "./App.css";
import SignIn from "./Components/Sign In/SignIn";
import SignUp from "./Components/Sign Up/SignUp";
import MainPage from "./Components/Main Page/MainPage";
import TableCreation from "./Components/Table Creation/TableCreation";
import StepCreation from "./Components/Table Creation/StepCreation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path={"/signup"} component={SignUp} />
              <Route exact path={"/mainpage"} component={MainPage} />
              <Route exact path={"/tablecreation"} component={TableCreation} />
              <Route exact path={"/"} component={StepCreation} />
              {/* <Route exact path={"/"} component={SignIn} /> */}
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
