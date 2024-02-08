import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Work from '../Work/Work';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Courses from '../Courese/Courses';
import Contact from '../Contact/Contact';
import Experience from '../Experience/experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Experience/>
      <Work/>
      <About/>
      <Skills/>
      <Courses/>
      <Contact/>
    </div>
  );
}

export default App;
