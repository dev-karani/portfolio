import React from 'react'
import Text from '../tokens/atoms/text';
import SectionTitle from '../tokens/atoms/sectionTitle';
import CardLegend from '../pieces/cardLegend';

const Main = () => {
    return (
        <div className='flex min-h-[200vh] flex-col'>
            <div className='grid grid-cols-12 min-h-[200vh]'>
                <div className='col-start-1 col-end-3 mt-6 ml-10 sticky top-0 '>
                    <Text className='mb-4'>overview</Text>
                    <Text className='mb-4'>Cloud</Text>
                    <Text className='mb-4'>Networking</Text>
                    <Text className='mb-4'>Security</Text>
                </div>
                <div className='col-start-3 col-end-13 '>
                    <SectionTitle>Security</SectionTitle>
                    <Text className='max-w-xl'>below re writeups and projects ive done thro vvarous resources like lets defend , try hack me and my own personal home labsi can set up firewalls, deploy idp, and  monitor internet traffice
                    </Text>
                    <div className='mt-24 flex flex-col'>
                        <Text className='text-xl border-b border-black z-50 pb-2'>Projects</Text>
                        <div className='flex mt-4  gap-5  flex-wrap'>
                             <CardLegend
                                image="/mlue.png"
                                    title="Blockchain Hackathon"
                                    date="12 April 2025"
                                    description="AI hackathon was a blend to create a digital recording tool for African heritage"
                                /> 
                             <CardLegend
                                image="/mlue.png"
                                    title="Blockchain Hackathon"
                                    date="12 April 2025"
                                    description="AI hackathon was a blend to create a digital recording tool for African heritage"
                             />           
                             <CardLegend
                                image="/mlue.png"
                                title="Blockchain Hackathon"
                                date="12 April 2025"
                                description="AI hackathon was a blend to create a digital recording tool for African heritage"
                            />   
                            <CardLegend
                                image="/mlue.png"
                                title="Blockchain Hackathon"
                                date="12 April 2025"
                                description="AI hackathon was a blend to create a digital recording tool for African heritage"
                            />                             
                             <CardLegend
                                image="/mlue.png"
                                title="Blockchain Hackathon"
                                date="12 April 2025"
                                description="AI hackathon was a blend to create a digital recording tool for African heritage"
                            />  
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Main;