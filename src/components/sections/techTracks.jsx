import React from "react";
import SectionTitle from "../tokens/atoms/sectionTitle";
import Text from "../tokens/atoms/text";
import Header from "../tokens/atoms/Header";
import Section from "./section";
import Animation from "../pieces/animation";
import Container from "../pieces/container";

const Tracks = () =>{
    return (
        <div>
            <Container>
                <Section className="mt-24 mb-24">
                    <div className="flex flex-col h-[90vh]">
                    <div className="flex-3 flex flex-col items-center">
                        <div className=" flex flex-1 flex-col text-center">
                            <SectionTitle className="text-3xl mb-4">Tech tracks</SectionTitle>
                            <Text className="mb-5 max-w-[22rem] text-sm font-[400]">Navigating through tech and IT can be overwhelming. That’s why I create writeups and projects that are visual and use analogies —to help others starting from scratch.</Text>
                        </div>
                        <div className=" flex-3 flex">
                            <Animation></Animation>
                        </div>
                    </div>
                    <div className="flex justify-around  flex-1 mt-16">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                                <Header className="">Cloud</Header>
                            </div>
                            <Text className="w-40">From browser to recepient  all in sll it so productive productive</Text>
                        </div>
                        <div className="flex flex-col"> 
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                                <Header>Networking</Header>

                            </div>
                            <Text className="w-40">From browser to recepient all in sll it so productive productive</Text>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                                <Header>Security</Header>
                            </div>
                            <Text className="w-40">From browser to recepient all in sll it so productive productive</Text>
                        </div>
                    </div>
                </div>  
            
                </Section>
            </Container>
        </div>
           
       

    );
};

export default Tracks;
