import './App.css';
import Nav from './components/Nav/Nav';
import "./output.css";
import "./input.css";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './tailwind.css'; 
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
    {/* <Nav/> */}
     <Routes>
      {/* <Route path="/" element={<div><Nav/><Home/></div>}></Route> */}
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
      <Route path="/" element={<><Nav/><Home/><Footer/></>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
