import "./styles/main.css"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Home></Home>

      <Project></Project>

      <Footer></Footer>
    </div>
  );
}

export default App;
