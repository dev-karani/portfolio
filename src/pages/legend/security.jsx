import React from 'react'
import Text from '../../components/tokens/atoms/text';
import Main from '../../components/sections/main';

const Security =() => {
    return (
        <Main
            title="Security"
            description="Currently in my SOC path in Try Hack Me/ Let's defend. will be posting SOON. And also for other skills like scripting"
            projects={[
              {
                image: "/mlue.png",
                title: "SOC Analyst Path",
                description: "Currently in my SOC path in Try Hack Me/ Let's defend. will be posting SOON",
                tags: ["project", "security"],
                date: "16 April 2025",
              },
            ]}
        />

    )
}

export default Security;
