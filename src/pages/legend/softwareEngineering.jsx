import Main from "../../components/sections/main";
import React from 'react'
import Text from '../../components/tokens/atoms/text';

const Software =() => {
    return (
        <Main
            title="Software"
            description="Im onthe fullstack open path, so be sure ill post sooner. that, and hackathons ill take part in"
            projects={[
              {
                image: "/mlue.png",
                title: "Blockchain Hackathon",
                description: "AI hackathon was a blend to create a digital recording tool for African heritage",
                tags: ["project", "networking"],
                date: "16 April 2025",
              },
             
            ]}
        />

    )
}

export default Software;

