import React from "react";
import Navbar from "../components/pieces/navbar";
import Hero from "../components/sections/hero";
import Journey from "../components/sections/techTracks";
import Highlights from "../components/sections/highlights";
import Tracks from "../components/sections/techTracks";
import Footer from "../components/pieces/footer";
import Main from "../components/sections/mainpage";

const Homepage = () =>{
    return (
       <>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Tracks/>
        <Footer/>
        <Main/>
       </>

    );
};

export default Homepage;