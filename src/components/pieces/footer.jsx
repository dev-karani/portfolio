import React from "react";
import Text from "../tokens/atoms/text";
import Section from "../sections/section";
import Button from "../tokens/atoms/button";

const Footer = ()=>{
    return(
        <div>
            <Section>
                <div className="flex h-[80vh] flex-col items-stretch ">
                    <div className="flex mb-16">
                        <Text className="text-7xl"> Let's make something!</Text>
                    </div>
                    <div className="grid grid-cols-12 gap-4 flex-1"> 
                        <div className="col-start-1 col-end-7 flex flex-col justify-between">
                            <div className=""> 
                                <Text>Resume/CV</Text>
                                <Text>Resume/CV</Text>
                                <Button>Contact Me </Button>
                            </div>
                            <div>
                            <Text>Navigation</Text>
                            <div className="flex gap-6">
                                <div>
                                    <Text>home</Text>
                                    <Text>about</Text>
                                </div>
                                <div>
                                    <Text>legend</Text>
                                    <Text>labs</Text>
                                </div>
                            </div>
                        </div>
                        
                        </div> 
                        <div className="col-start-12 col-end-9 ">
                        <div className="flex items-center h-full">
                            <img src="/mlue.png" alt="" />
                        </div>  
                        </div>
                    </div>
                </div>
            </Section>   
        </div>
    )
}

export default Footer;