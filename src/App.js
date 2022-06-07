import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navabr from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navabr/>
        <Footer/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
