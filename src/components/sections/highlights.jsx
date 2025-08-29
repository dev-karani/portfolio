import React from "react";
import SectionTitle from "../tokens/atoms/sectionTitle";
import Text from "../tokens/atoms/text";
import Header from "../tokens/atoms/Header";
import Paragraph from "../tokens/atoms/paragraph";
import Section from "./section";


const Highlights = () =>{
    return (
        <>
            <Section className="pt-28 ">
                <div class = "min-h-[80vh] flex ">
                    <div className="h-full flex flex-col basis-2/5 ">
                        <SectionTitle className="text-4xl mb-3" >Highlights</SectionTitle>
                        <Text className="mb-5max-w-[20rem] text-sm font-[400]">
                            "A mix of hackathons, passion projects, and explorations. Each one a chance to stretch design, code, and imagination a little further."
                        </Text>
                        <Text className="flex">kroedstima</Text>
                     </div>
                    <div className=" basis-3/5 flex">
                        <Text className="">julia</Text>
                        <Text className="flex-1">Koedramea</Text>
                    </div>
                 </div>
            </Section>
        </>
        
    );
};

export default Highlights;
