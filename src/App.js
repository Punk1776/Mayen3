import './App.css';
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
     <div className="App">
    <Router>
    <h1>Mayen HVAC and applice repair</h1>
    <Navbar />
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/Services" element={< Services />} />
         <Route path="/About" element={< About />} />
       <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />
    </Router>
    
  </div>
     );

  }

export default App;
