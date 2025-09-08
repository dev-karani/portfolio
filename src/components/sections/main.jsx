import React, { useState } from "react";
import Text from "../tokens/atoms/text";
import SectionTitle from "../tokens/atoms/sectionTitle";
import CardLegend from "../pieces/cardLegend";
import Container from "../pieces/container";
import Modal from "../pieces/modal";

const Main = ({ title, description, projects }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedProject, setSelectedProject] = useState(null);

  // 🔹 Gather all unique tags across all projects
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags || [])));
  const filterOptions = ["all", ...allTags];

  // 🔹 Filter + sort
  const filteredProjects = projects
    .filter((project) =>
      activeFilter === "all" ? true : project.tags?.includes(activeFilter)
    )
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <Container>
      <div className="flex flex-col mt-8">
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-end-13">
            {/* Title + description */}
            <SectionTitle>{title}</SectionTitle>
            <Text className="max-w-xl">{description}</Text>

            {/* Only render if projects exist */}
            {projects.length > 0 && (
              <div className="mt-10 flex flex-col">
                {/* 🔹 Filter + Sort controls */}
                <div className="sticky top-0 bg-white flex flex-wrap gap-3 border-b border-gray-300 z-50 py-3">
                  <div className="flex gap-2 flex-wrap">
                    {filterOptions.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setActiveFilter(tag)}
                        className={`px-3 py-1 rounded text-xs transition ${
                          activeFilter === tag
                            ? "bg-black text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border px-2 py-1 rounded text-sm"
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>

                {/* 🔹 Cards Grid */}
                <div className="grid gap-6 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredProjects.map((project) => (
                    <CardLegend
                      key={project.id}
                      {...project}
                      onSelect={setSelectedProject}
                    />
                  ))}
                </div>

                {/* 🔹 Empty state */}
                {filteredProjects.length === 0 && (
                  <Text className="text-gray-500 mt-6">No projects found.</Text>
                )}
              </div>
            )}

            {/* Modal for selected project */}
            {selectedProject && (
              <Modal
                isOpen={!!selectedProject}
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
