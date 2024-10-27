import {Navbar,HomePage} from "./components/Navbar"
import logo from './assets/logo.png'; // Adjust the path as needed
import home from './assets/home.webp';
import Contact from './components/Contact';
import About from './components/About';
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="navbarapp">
            <Navbar/>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={ <HomePage/> } />  
                    <Route path="Builders/About" element={ <About/> } />
                    <Route path="Builders/Projects" element={ <Projects/> } />
                    <Route path="Builders/Gallery" element={ <Gallery/> } />
                    {/* <Route path="Builders/Custom_Interiors" element={ <CustomInteriors/>} />
                    <Route path="Builders/Testimonials" element={ <Testimonials/> } /> */}
                    <Route path="Builders/Contact" element={ <Contact/> } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
