// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-xl font-semibold">Project not found</h2>
        <p className="text-sm text-gray-600 mt-2">We couldn't find that project.</p>
        <button className="mt-4 px-3 py-2 border" onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button className="text-sm text-blue-600 mb-4" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-xs text-gray-500 mb-4">{project.date}</p>

      {project.image && (
        <div className="mb-6 rounded overflow-hidden aspect-[16/9]">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      )}

      <p className="mb-6">{project.description}</p>

      <div className="prose">
        <p>{project.content}</p>
      </div>
    </div>
  );
}
