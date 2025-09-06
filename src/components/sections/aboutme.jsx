import React from "react";
import Container from "../pieces/container";
import SectionTitle from "../tokens/atoms/sectionTitle";
import Text from "../tokens/atoms/text";

const AboutMe = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 min-h-[90vh] py-10">
          {/* Left: Image with shadow background */}
          <div className="relative flex-1 flex justify-center">
            {/* Shadow block */}
            <div className="absolute top-6 left-6 w-72 h-[22rem] bg-gray-400 rounded-md"></div>

            {/* Image */}
            <img
              src="/mlue.png"
              alt="Profile"
              className="relative w-72 h-[22rem] object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="flex-1 flex flex-col w-72">
            <SectionTitle>About Me</SectionTitle>
            <div className="mt-4 space-y-4 text-lg leading-relaxed">
              <Text>
                A curious IT student with a Swiss-army-knife mindset — versatile,
                adaptive, and always eager to take on new challenges.
              </Text>
              <Text>
                I thrive on making sense of complexity, whether that’s in
                Networking, Cloud, or Full-Stack Development, and I bring clarity
                by explaining concepts through simple analogies and visuals.
              </Text>
              <Text>
                I’m currently deepening my expertise in Cloud Computing with ALX
                AWS while exploring the world of Security Analysis. For me,
                learning isn’t linear — it’s a constant cycle of evolving,
                experimenting, and connecting dots across fields.
              </Text>
              <Text>
                Outside of class and projects, you’ll often find me tinkering
                with motion experiments in Rive, chasing that sweet balance
                between tech, creativity, and curiosity. Always open to new
                challenges, collaborations, and opportunities to grow.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
