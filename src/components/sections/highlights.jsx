import React from "react";
import SectionTitle from "../tokens/atoms/sectionTitle";
import Text from "../tokens/atoms/text";
import EmblaCarousel from "../pieces/carousel";
import Container from "../pieces/container";
import Card from "../pieces/card";

const Highlights = () => {
  return (
    <section className=" text-gray-100 py-24">
      <Container>
        {/* Header */}
        <div className="mb-10 text-center">
          <SectionTitle className="text-4xl text-gray-700 mb-3">
            Highlights
          </SectionTitle>
          <Text className="max-w-lg mx-auto ">
            A mix of hackathons, passion projects, and explorations — each one a
            chance to stretch design, code, and imagination a little further.
          </Text>
        </div>

        {/* Carousel */}
        <div className="relative">
          <EmblaCarousel>
            <Card
              image="/mlue.png"
              title="Blockchain Hackathon"
              date="12 April 2025"
              description="Built a digital archiving tool blending AI and blockchain for African heritage."
              className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
            />
            <Card
              image="/mlue.png"
              title="AI Hackathon"
              date="19 May 2025"
              description="Created a lightweight AI assistant that helps visualize design concepts."
              className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
            />
            <Card
              image="/mlue.png"
              title="Creative Coding"
              date="5 June 2025"
              description="Explored generative visuals and 3D interactivity using WebGL."
              className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
            />
          </EmblaCarousel>
        </div>
      </Container>
    </section>
  );
};

export default Highlights;
