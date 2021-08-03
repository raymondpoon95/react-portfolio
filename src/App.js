import '../src/styles/app.scss';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
