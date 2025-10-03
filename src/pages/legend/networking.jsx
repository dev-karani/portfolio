import React from 'react'
import Text from '../../components/tokens/atoms/text';
import Main from '../../components/sections/main';
import packetTracer from '../../modals/ciscoPacketTracer';

const Networking =() => {
    return (
        <Main
            title="Networking"
            description="Below are writeups and projects I've done through resources like Let's Defend, TryHackMe, and my home labs..."
            projects={[
              {
                image: "/packetTracer.png",
                title: "101: My First SOHO Lab",
                description: "In this lesson, I learn how to use packetTracer to simulate networks",
                tags: ["project", "networking", "Cisco"],
                date: "1 October 2025",
                modalComponent: packetTracer, // 🔹 This will render inside Modal
              },
              
            ]}
        />

    )
}

export default Networking;
