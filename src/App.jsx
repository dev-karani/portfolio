import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Legend from "./pages/Legend";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Overview from "./pages/legend/overview";
import Cloud from "./pages/legend/cloud";
import Networking from "./pages/legend/networking";
import Security from "./pages/legend/security";

const App =()=> {
  return(
    <BrowserRouter>
  <Routes>
    {/* Layout wraps all pages */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />   {/* Default homepage */}
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />

      <Route path="legend" element={<Legend />}>
          <Route index element={<Overview />} /> {/* default */}
          <Route path="overview" element={<Overview />} />
          <Route path="cloud" element={<Cloud />} />
          <Route path="networking" element={<Networking />} />
          <Route path="security" element={<Security />} />
      </Route>

    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default App;
