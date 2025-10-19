import React from 'react';
import Main from '../../components/sections/main';
import CloudWriteup from '../../modals/cloudWriteup';

const Cloud = () => {
  return (
    <Main
      title="Cloud"
      description="In this section I explore.... cloud fundamentals with AWS and GCP. Stay tuned"
      projects={[
        {
          image: "/awspic.png",
          title: "AWS Static Website",
          description: "I set up, configured and deployed a react app with AWS Amplify.",
          tags: ["project", "cloud"],
          date: "16 April 2025",
        },
       
      ]}
    />
  );
};

export default Cloud;
