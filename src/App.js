import "./styles/main.css";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home.js";
import Project from "./pages/Project.js";
import React from "react";
import Contacts from "./pages/Contacts.js";
import Projects from "./pages/Projects.js";
function App() {
  return (
      <div className="App">
        <Navbar></Navbar>

        {/* <Home></Home> */}

         {/* <Projects></Projects>*/}
            <Project></Project>
          {/*<Contacts></Contacts>*/}
        <Footer></Footer>
      </div>
  );
}

export default App;
