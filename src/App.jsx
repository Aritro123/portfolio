import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import SocialLink from "./components/SocialLink.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />

      <SocialLink />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
