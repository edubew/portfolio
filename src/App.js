import './App.css';
import HeadLine from './Components/Header/HeadLine';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <HeadLine />
      <Navbar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
