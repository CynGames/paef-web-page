import logo from './img/logocroquis.png';
import './App.css';
import SignIn from './Components/Sign In/SignIn';
import SignUp from './Components/Sign Up/SignUp';
import MainPage from './Components/Main Page/MainPage';

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={ logo } className="App-logo" alt="logo" /> */}
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        < MainPage/>
      </header>
    </div>
  );
}

export default App;