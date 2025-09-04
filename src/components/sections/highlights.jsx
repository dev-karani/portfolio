import React from "react";
import SectionTitle from "../tokens/atoms/sectionTitle";
import Text from "../tokens/atoms/text";
import Header from "../tokens/atoms/Header";
import Paragraph from "../tokens/atoms/paragraph";
import Section from "./section";
import Card from "../pieces/card";
import EmblaCarousel from "../pieces/carousel";
import Container from "../pieces/container";


const Highlights = () =>{
    return (
        <>
            <Container>
                           <Section className="mt-32">
                <div className="min-h-screen flex flex-col">
                  <div className="flex px-4 flex-col">
                    <SectionTitle className="text-4xl mb-4">Highlights</SectionTitle>
                    <Text className=" max-w-[20rem] text-sm font-[400]">
                      "A mix of hackathons, passion projects, and explorations. Each one a
                      chance to stretch design, code, and imagination a little further."
                    </Text>
                  </div>
                  <div className="flex-1 flex">
                    <EmblaCarousel>
                    <Card
                        image="/mlue.png"
                            title="Blockchain Hackathon"
                            date="12 April 2025"
                            description="AI hackathon was a blend to create a digital recording tool for African heritage"
                    />      
                    <Card
                        image="/mlue.png"
                            title="Blockchain Hackathon"
                            date="12 April 2025"
                            description="AI hackathon was a blend to create a digital recording tool for African heritage"
                    />  
                    <Card
                        image="/mlue.png"
                            title="Blockchain Hackathon"
                            date="12 April 2025"
                            description="AI hackathon was a blend to create a digital recording tool for African heritage"
                    />     
                    <Card
                        image="/mlue.png"
                            title="Blockchain Hackathon"
                            date="12 April 2025"
                            description="AI hackathon was a blend to create a digital recording tool for African heritage"
                    />      
                    <Card
                        image="/mlue.png"
                            title="Blockchain Hackathon"
                            date="12 April 2025"
                            description="AI hackathon was a blend to create a digital recording tool for African heritage"
                    />   
                    <Card
                        image="/mlue.png"
                            title="Blockchain Hackathon"
                            date="12 April 2025"
                            description="AI hackathon was a blend to create a digital recording tool for African heritage"
                    />                    
                    </EmblaCarousel>
                  </div>


                </div>
            </Section>
            </Container>

        </>
        
    );
};

export default Highlights;
     
         