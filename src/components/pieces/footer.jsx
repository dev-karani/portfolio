import React from "react";
import Text from "../tokens/atoms/text";
import Section from "../sections/section";
import Button from "../tokens/atoms/button";
import Container from "./container";
import SectionTitle from "../tokens/atoms/sectionTitle";
import Foots from "../tokens/atoms/foots";


const Footer = ()=>{
    return(
        <div>
            <Container className="">
                <Section className="mt-0">
                    <div className="flex h-[65vh] flex-col">
                        <div className="grid grid-cols-12 gap-4 flex-1"> 
                            <div className="col-start-1 col-end-7 flex flex-col pt-16 gap-12">
                                <div className="">
                                    <SectionTitle className="text-[72px] font-normal"> Let's make something!</SectionTitle>
                                </div>
                                <div className=""> 
                                    <Text className="mb-2 pl-2">Resume/CV</Text>
                                    <Button>Contact Me </Button>
                                </div>
                                {/* <div>
                                    <Text className=" mb-2 font text-base font-semibold">Navigation</Text>
                                    <div className="flex gap-6 ">
                                        <div>
                                            <Text className="mb-2 underline">Home</Text>
                                            <Text className="underline">About</Text>
                                        </div>
                                        <div>
                                            <Text className="mb-2 underline">Legend</Text>
                                            <Text className="underline">Labs</Text>
                                        </div>
                                    </div>
                                </div>  */}
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