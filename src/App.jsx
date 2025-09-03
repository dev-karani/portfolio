import './App.css' 
import Container from './components/pieces/container';
import Homepage from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Legend from './pages/Legend';
import About from './pages/About Me';
import Projects from './pages/Projects';


const App = ()=>{
  return (
    <>
        <Router>
          <Routes>
            <Route path='/Home' element={<Homepage/>}/>
            <Route path='/Legend' element={<Legend/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/About Me'  element={<About/>}/>
          </Routes>
        </Router>

    </>
  );
}

export default App;
