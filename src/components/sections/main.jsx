import React, { useState } from "react";
import Text from "../tokens/atoms/text";
import SectionTitle from "../tokens/atoms/sectionTitle";
import CardLegend from "../pieces/cardLegend";
import Container from "../pieces/container";

const Main = ({ title, description, projects }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  // filter + sort
  const filteredProjects = projects
    .filter((project) =>
      activeFilter === "all" ? true : project.tags?.includes(activeFilter)
    )
    .sort((a, b) => {
      return sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });

  return (
    <Container>
      <div className="flex flex-col mt-8">
        <div className="grid grid-cols-12 min-h-[200vh]">
          <div className="col-start-1 col-end-13">
            {/* Section Title */}
            <SectionTitle>{title}</SectionTitle>

            {/* Section Description */}
            <Text className="max-w-xl">{description}</Text>

            {/* Only render if projects exist */}
            {filteredProjects.length > 0 && (
              <div className="mt-24 flex flex-col">
                {/* Filter + Sort controls moved here */}
                <div className="flex items-center gap-4 border-b border-black z-50 pb-2">
                  <div className="flex gap-2">
                    {["all", "project", "writeup"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setActiveFilter(tag)}
                        className={`px-3 py-1 rounded text-xs ${
                          activeFilter === tag
                            ? "bg-black text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="text-xs border px-2 py-1 rounded"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>

                {/* Cards grid */}
                <div className="grid gap-6 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredProjects.map((project, index) => (
                    <CardLegend
                      key={index}
                      image={project.image}
                      title={project.title}
                      date={project.date}
                      description={project.description}
                      tags={project.tags}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
