import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Legend from "./pages/Legend";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return(
    <BrowserRouter>
  <Routes>
    {/* Layout wraps all pages */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />   {/* Default homepage */}
      <Route path="home" element={<Home />} />
      <Route path="legend" element={<Legend />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default App;
