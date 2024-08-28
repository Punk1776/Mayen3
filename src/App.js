import './App.css';
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
     <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/Services" exact component={Services} />
    </Routes>
    <Footer />
    </Router>
    <h1>Mayen HVAC and applice repair</h1>
  </div>
     );

  }

export default App;
