import './App.css';
import Nav from './Nav';
import "./output.css";
import "./input.css";
import Register from './components/auth/Register';
import Login from './components/auth/Login';


function App() {
  return (
   <>
   <Nav/>
    <Login/>
    <Register/>
   
   </>
  );
}

export default App;
