import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Protfolio from "./components/protfolio/Protfolio";
import Projects from "./components/projects/Projects";
import Testemonials from "./components/testimonials/Testimonials";
import Contacs from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import './App.scss'
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro/>
          <Protfolio/>
          <Projects/>
          <Testemonials/>
          <Contacs/>
        </div>
    </div>
  );
}

export default App;
