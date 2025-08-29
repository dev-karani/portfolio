import React from "react";
import Navbar from "../components/pieces/navbar";
import Hero from "../components/sections/hero";
import Journey from "../components/sections/journey";
import Highlights from "../components/sections/highlights";

const Homepage = () =>{
    return (
       <>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Journey/>
       </>

    );
};

export default Homepage;