import Main from "../../components/sections/main";
import React from 'react'
import Text from '../../components/tokens/atoms/text';

const Software =() => {
    return (
        <Main
            title="Software"
            description="Below are writeups and projects I've done through resources like Let's Defend, TryHackMe, and my home labs..."
            projects={[
              {
                image: "/mlue.png",
                title: "Blockchain Hackathon",
                description: "AI hackathon was a blend to create a digital recording tool for African heritage",
                tags: ["project", "networking"],
                date: "16 April 2025",
              },
              {
                image: "/mlue.png",
                title: "Blockchain Hackathon",
                description: "AI hackathon was a blend to create a digital recording tool for African heritage",
                tags: ["writeup", "networking"],
                date: "16 April 2025",
              },
              {
                image: "/mlue.png",
                title: "Blockchain Hackathon",
                description: "AI hackathon was a blend to create a digital recording tool for African heritage",
                tags: ["writeup", "networking"],
                date: "16 April 2025",
              },
            ]}
        />

    )
}

export default Software;

