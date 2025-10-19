import React from 'react'
import Text from '../../components/tokens/atoms/text';
import Main from '../../components/sections/main';

const Overview =() => {
    return (
        <Main
            title="Overview"
            description="Below are writeups and projects I've done through resources like Let's Defend, TryHackMe, and my home labs..."
            projects={[
              {
                image: "/mlue.png",
                title: "Blockchain Hackathon",
                description: "AI hackathon was a blend to create a digital recording tool for African heritage",
                tags: ["writeup", "overview"],
              }]}
        />

    )
}

export default Overview;
