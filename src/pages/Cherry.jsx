import React from "react";
import Navbar from "../components/pieces/navbar";
import Hero from "../components/sections/hero";
import Journey from "../components/sections/techTracks";
import Highlights from "../components/sections/highlights";

const Homepage = () =>{
    return (
       <>
        <Navbar/>
        <Hero/>
        <Highlights/>
       </>

    );
};

export default Homepage;