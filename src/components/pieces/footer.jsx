import React from "react";
import Text from "../tokens/atoms/text";
import Section from "../sections/section";
import Button from "../tokens/atoms/button";
import Container from "./container";

const Footer = ()=>{
    return(
        <div>
            <Container>
                <Section className="mt-0 mb-16">
                    <div className="flex h-[80vh] flex-col ">
                        <div className="mb-16">
                            <p className="text-7xl"> Let's make something!</p>
                        </div>
                        <div className="grid grid-cols-12 gap-4 flex-1"> 
                            <div className="col-start-1 col-end-7 flex flex-col justify-between">
                                <div className=""> 
                                    <Text className="mb-2 pl-2">Resume/CV</Text>
                                    <Button>Contact Me </Button>
                                </div>
                                <div>
                                    <Text className=" mb-2 font text-base">Navigation</Text>
                                    <div className="flex gap-6 ml-2">
                                        <div>
                                            <Text className="">Home</Text>
                                            <Text className="">About</Text>
                                        </div>
                                        <div>
                                            <Text className="">Legend</Text>
                                            <Text className="">Labs</Text>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                            <div className="col-start-13 col-end-9 h-full">
                                <div className="flex items-center h-full">
                                    <img src="/mlue.png" alt="" />
                                </div>  
                            </div>
                        </div>
                    </div>
                </Section>   
            </Container>
        </div>
    )
}

export default Footer;