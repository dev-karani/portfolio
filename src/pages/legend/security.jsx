import React from 'react'
import Text from '../../components/tokens/atoms/text';
import Main from '../../components/sections/main';

const Security =() => {
    return (
        <Main
            title="Security"
            description="Below are writeups and projects I've done through resources like Let's Defend, TryHackMe, and my home labs..."
            projects={[
              {
                image: "/mlue.png",
                title: "Blockchain Hackathon",
                date: "12 April 2025",
                description: "AI hackathon was a blend to create a digital recording tool for African heritage"
              },
              {
                image: "/mlue.png",
                title: "Network Firewall Lab",
                date: "20 May 2025",
                description: "Configured firewalls and monitored network traffic in a home lab setup"
              }
            ]}
        />

    )
}

    


export default Security;