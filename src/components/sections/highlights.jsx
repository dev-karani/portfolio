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
            <Section className="pt-32 ">
                <SectionTitle className="text-2xl mb-3" >Highlights</SectionTitle>

            </Section>
                <div class = "h-[85vh] flex">
                    <div className="grid grid-cols-12 gap-4 ">
                        <div className="col-start-1 col-end-4 h-full flex flex-col basis-2/5 ">
                            <Text className="mb-5 max-w-[20rem] text-sm font-[400]">
                            "A mix of hackathons, passion projects, and explorations. Each one a chance to stretch design, code, and imagination a little further."
                            </Text>
                            <Text className="flex">kroedstima</Text>
                        </div>
                        
                        <div className=" col-start-4 col-end-13 basis-3/5 flex">
                        <EmblaCarousel>
                            <div className="embla__slide">
                                <Card
                                  image="/mlue.png"
                                  title="BlockChain Hackathon"
                                  date="12 April 2025"
                                  description="AI hackathon was a blend to create a digital recording tool for African heritage"
                                />
                            </div>
                             <div className="embla__slide">
                                <Wide
                                  image="/mlue.png"
                                  title="BlockChain Hackathon"
                                  date="12 April 2025"
                                  description="AI hackathon was a blend to create a digital recording tool for African heritage"
                                />
                            </div>                           
                            <div className="embla__slide ">
                                <Card
                                  image="/internet.png"
                                  title="How the Internet Really Works"
                                  date="12 April 2025"
                                  description="AI hackathon was a blend to create a digital recording tool for African heritage"
                                />
                            </div>
                            <div className="embla__slide">
                                <Wide
                                  image="/mlue.png"
                                  title="BlockChain Hackathon"
                                  date="12 April 2025"
                                  description="AI hackathon was a blend to create a digital recording tool for African heritage"
                                />
                            </div>
                            
                        </EmblaCarousel>
                         </div>
                    </div>
                 </div>
                 <Section className="pt-28 "></Section>
        </>
        
    );
};

export default Highlights;
