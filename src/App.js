import './App.css';
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
     <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact component={Home} />
    </Routes>
    </Router>
    <h1>Mayen HVAC and applice repair</h1>
  </div>
     );

  }

export default App;
