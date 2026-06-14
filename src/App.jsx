import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolio';
import './styles/variables.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Contact socials={portfolioData.socials} />
      </main>
    </div>
  );
}

export default App;
