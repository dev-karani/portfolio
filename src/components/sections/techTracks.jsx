import React from "react";
import SectionTitle from "../tokens/atoms/sectionTitle";
import Text from "../tokens/atoms/text";
import Header from "../tokens/atoms/Header";
import Section from "./section";
const Tracks = () =>{
    return (
        <div>
            <Section>
                <div className="flex flex-col h-[90vh]">
                <div className="flex-3 flex flex-col items-center">
                    <div className=" flex flex-1 flex-col text-center">
                        <SectionTitle className="text-3xl mb-4">Tech tracks</SectionTitle>
                        <Text className="mb-5 max-w-[22rem] text-sm font-[400]">Navigating through tech and IT can be overwhelming. That’s why I create writeups and projects that are visual and use analogies —to help others starting from scratch.</Text>
                    </div>
                    <div className=" flex-3 flex">
                        <p>icon</p>
                    </div>
                </div>
                <div className="flex justify-around flex-1">
                    <div className="flex flex-col">
                        <Header className="">Cloud</Header>
                        <Text className="w-50">From browser to recepient  all in sll it so productive productive</Text>
                    </div>
                    <div className="flex flex-col"> 
                        <Header>Cloud</Header>
                        <Text className="w-50">From browser to recepient all in sll it so productive productive</Text>
                    </div>
                    <div className="flex flex-col">
                        <Header>Cloud</Header>
                        <Text className="w-50">From browser to recepient all in sll it so productive productive</Text>
                    </div>
                </div>
            </div>  
        
            </Section>

        </div>
           
       

    );
};

export default Tracks;
