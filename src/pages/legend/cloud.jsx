import React from 'react';
import Main from '../../components/sections/main';
import CloudWriteup from '../../modals/cloudWriteup';

const Cloud = () => {
  return (
    <Main
      title="Cloud"
      description="Below are writeups and projects I've done through resources like Let's Defend, TryHackMe, and my home labs..."
      projects={[
        {
          image: "/mlue.png",
          title: "Blockchain Hackathon",
          description: "AI hackathon was a blend to create a digital recording tool for African heritage",
          tags: ["project", "cloud"],
          date: "16 April 2025",
        },
        {
          image: "/mlue.png",
          title: "Cloud Writeup",
          date: "22 May 2025",
          description: "Configured firewalls and monitored network traffic in a home lab setup",
          tags: ["writeup", "cloud","how the internet works"],
          modalComponent: CloudWriteup, // 🔹 This will render inside Modal
        },
        {
          image: "/mlue.png",
          title: "Network Firewall Lab",
          description: "Configured firewalls and monitored network traffic in a home lab setup",
          tags: ["project", "cloud"],
          date: "12 April 2025",
        },
        {
          image: "/mlue.png",
          title: "Network Firewall Lab",
          date: "20 May 2025",
          description: "Configured firewalls and monitored network traffic in a home lab setup",
          tags: ["project", "cloud"],
        }
      ]}
    />
  );
};

export default Cloud;
