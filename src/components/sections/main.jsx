import React from 'react'
import Text from '../tokens/atoms/text';
import SectionTitle from '../tokens/atoms/sectionTitle';
import CardLegend from '../pieces/cardLegend';
import Container from '../pieces/container';

const Main = ({ title, description, projects }) => {
    return (
        <Container>
            <div className="flex flex-col mt-8">
                <div className="grid grid-cols-12 min-h-[200vh]">
                    <div className="col-start-1 col-end-13">
                        {/* Dynamic Section Title */}
                        <SectionTitle>{title}</SectionTitle>

                        {/* Dynamic Section Description */}
                        <Text className="max-w-xl">
                            {description}
                        </Text>

                        {/* Projects Section */}
                        {projects && projects.length > 0 && (
                            <div className="mt-24 flex flex-col">
                                <Text className="text-xl border-b border-black z-50 pb-2">
                                    Projects
                                </Text>
                                <div className="flex mt-4 gap-5 flex-wrap">
                                    {projects.map((project, index) => (
                                        <CardLegend
                                            key={index}
                                            image={project.image}
                                            title={project.title}
                                            date={project.date}
                                            description={project.description}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Main;
