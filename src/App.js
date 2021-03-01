import './App.css';
import SignIn from './Components/Sign In/SignIn';
import SignUp from './Components/Sign Up/SignUp';
import MainPage from './Components/Main Page/MainPage';
import TableCreation from './Components/Table Creation/TableCreation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App()
{
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={"/signup"} component= {SignUp}/>
          <Route exact path={"/mainpage"} component= {MainPage}/>
          <Route exact path={"/tablecreation"} component= {TableCreation}/>
          <Route exact path={"/"} component= {SignIn}/>
        </Switch>
      </div>
      </Router>
      </header>
    </div>
  );
}

export default App;