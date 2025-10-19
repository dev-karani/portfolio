import React from 'react'
import Text from '../../components/tokens/atoms/text';
import Main from '../../components/sections/main';
import packetTracer from '../../modals/ciscoPacketTracer';

const Networking =() => {
    return (
        <Main
            title="Networking"
            description="In this section I explore.. networking basics with CISCO netcad"
            summary={
           <div>
             <p>In this section I explore...</p>
             <blockquote className="border-l-4 pl-3 text-gray-600">
               “The network is the computer.” — Sun Microsystems
             </blockquote>
           </div>
            }
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
