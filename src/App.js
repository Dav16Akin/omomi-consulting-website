import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Homepage from "./body/Body";
import Footer from "./footer/Footer";
import aboutPage from "./pages/aboutPage";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact Component={Homepage}/>
        <Route path="/about" Component={aboutPage}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
