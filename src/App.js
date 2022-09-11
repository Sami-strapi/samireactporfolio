
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      
    <NavBar/>
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
    
    </div>
  );
}

export default App;
