import React from "react";
import SectionTitle from "../tokens/atoms/sectionTitle";
import Text from "../tokens/atoms/text";
import Header from "../tokens/atoms/Header";
import Paragraph from "../tokens/atoms/paragraph";
import Section from "./section";
import EmblaCarousel from "../pieces/carousel";
import Card from "../pieces/cardWide";
import Wide from "../pieces/card";


const Highlights = () =>{
    return (
        <>
            <Section className="mt-24">
                <div class = "h-[90vh] flex ">
                    <div className="flex flex-col">
                        <div className="h-full flex flex-col basis-2/5 justify-around">
                            <SectionTitle className="text-4xl mb-4" >Highlights</SectionTitle>
                            <Text className="mb-5 max-w-[20rem] text-sm font-[400]">
                            "A mix of hackathons, passion projects, and explorations. Each one a chance to stretch design, code, and imagination a little further."
                            </Text>
                            <Text className="flex">kroedstima</Text>
                        </div>
                        
             
                    </div>
                 </div>
            </Section>

        </>
        
    );
};

export default Highlights;
            // <div className="flex">
            //                 <EmblaCarousel>
            //                     <div className="embla__slide">
            //                         <Card
            //                           image="/mlue.png"
            //                           title="BlockChain Hackathon"
            //                           date="12 April 2025"
            //                           description="AI hackathon was a blend to create a digital recording tool for African heritage"
            //                         />
            //                     </div>
            //                     <div className="embla__slide ">
            //                         <Card
            //                           image="/internet.png"
            //                           title="How the Internet Really Works"
            //                           date="12 April 2025"
            //                           description="AI hackathon was a blend to create a digital recording tool for African heritage"
            //                         />
            //                     </div>
                                                          
            //                     <div className="embla__slide ">
            //                         <Card
            //                           image="/internet.png"
            //                           title="How the Internet Really Works"
            //                           date="12 April 2025"
            //                           description="AI hackathon was a blend to create a digital recording tool for African heritage"
            //                         />
            //                     </div>
            //                     {/* <div className="embla__slide">
            //                         <Wide
            //                           image="/mlue.png"
            //                           title="BlockChain Hackathon"
            //                           date="12 April 2025"
            //                           description="AI hackathon was a blend to create a digital recording tool for African heritage"
            //                         />
            //                     </div> */}

            //                 </EmblaCarousel>
            //              </div>