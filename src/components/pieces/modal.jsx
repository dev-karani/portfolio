import React, { useEffect } from "react";

const SlideInModal = ({ isOpen, project, onClose }) => {
  // lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close with Escape key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Slide-in panel */}
      <div
        className="
          relative h-full 
          w-[90%] md:w-[95%]
          bg-white shadow-xl 
          overflow-y-auto
          animate-slideIn
        "
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Content */}
        <div className="p-8 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          {project.date && <p className="text-sm text-gray-500">{project.date}</p>}

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow"
            />
          )}

          <p className="text-gray-700">{project.description}</p>
          <div className="space-y-4">{project.content}</div>
        </div>
      </div>
    </div>
  );
};

export default SlideInModal;
