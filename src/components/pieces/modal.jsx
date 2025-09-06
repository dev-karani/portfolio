import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ project, onClose, isOpen }) {
  if (!isOpen || !project) return null;

  const ContentComponent = project.modalComponent || null;

  // 🔹 Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative ml-auto w-[90%] h-full bg-white shadow-2xl  overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6">
          {ContentComponent ? <ContentComponent /> : <p>No content yet.</p>}
        </div>
      </div>
    </div>
  );
}
