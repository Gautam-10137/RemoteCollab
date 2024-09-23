import "./App.css";
import Nav from "./components/Nav/Nav";
import "./output.css";
import "./input.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./tailwind.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateProject from "./components/Project/CreateProject";
import { ProjectProvider } from "./components/context/ProjectContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Nav/> */}

        <div>
          <Routes>
            {/* <Route path="/" element={<div><Nav/><Home/></div>}></Route> */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </div>
        <div>
          <ProjectProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="dashboard"
              element={
                <>
                  <Nav />
                  <Dashboard />
                </>
              }
            />
            <Route path="/createProject" element={<CreateProject />} />
          </Routes>
          </ProjectProvider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
