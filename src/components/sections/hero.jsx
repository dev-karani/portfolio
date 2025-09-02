import React from "react";
import Title from "../tokens/atoms/title"
import Animation from "../pieces/animation"
import Text from "../tokens/atoms/text";
import Button from "../tokens/atoms/button";

const Hero = () =>{
    return (
        <div>
         <div className=" flex flex-col min-h-[calc(95vh-var(--navbar-height))] " >
            <div className="flex-1  flex flex-col "> 
                    <div className=" flex-1 grid grid-cols-12 gap-4 ">
                        <div className="col-start-1 col-span-6 mt-8">
                            <Text className="text-sub ml-[0.3em] mb-2">Hi, I'm an aspiring  </Text>
                            <Title className="leading-[0.9] text-clampSub mb-9  " >Cloud <br />Engineer</Title>
                            <Button className="">View Projects</Button>
                        </div>
                        <div className="col-start-13 col-end-10 flex justify-end items-end">
                            <Animation></Animation>
                        </div>
                        
                        
                    </div>
                    <div className="flex gap-32">
                        <Text className="w-62">This is my documentation of what I’ve learned and built so far.</Text>
                        <Text className="w-72">I love breaking down complex concepts into visual analogies and interactive stories—so be sure to check out my guides and labs in Legends.</Text>
                    </div>
                    
                  
            </div>
           </div>
        </div>
       

    );
};

export default Hero;