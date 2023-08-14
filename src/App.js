import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Homepage from "./body/Body";
import Footer from "./footer/Footer";
import aboutPage from "./pages/aboutPage";
import impactPage from "./pages/impactPage";
import contactPage from "./pages/contactPage";


function App() {
  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Homepage}/>
        <Route path="/about" Component={aboutPage}/>
        <Route path="/impact" Component={impactPage}/>
        <Route path="/contact" Component={contactPage}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
