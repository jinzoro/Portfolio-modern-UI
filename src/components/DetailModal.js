import React from 'react';
import {
  ChevronRight,
  Github,
  X, // Added for close button
} from 'lucide-react'; // Import necessary icons

// Detail Modal Component
const DetailModal = ({ content, type, onClose }) => {
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in"
        onClick={onClose} // Close modal when clicking on overlay
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-zoom-in-modal transform scale-95 opacity-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
        >
          <X size={28} />
        </button>

        {type === 'skill' && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
              {content.icon && <content.icon size={32} className="text-blue-600" />}
              <span>{content.category}</span>
            </h3>
            <p className="text-lg text-gray-700 mb-6">Detailed overview of skills in this category:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {content.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center">
                  <ChevronRight size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
              <li className="text-gray-500 italic mt-4">
                (Add more specific details about your proficiency, projects where you used these skills, or relevant certifications here.)
              </li>
            </ul>
          </div>
        )}

        {type === 'project' && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">{content.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {content.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            {content.link && (
              <a
                href={content.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 text-lg"
              >
                <Github size={20} className="mr-2" />
                <span>View Repository / Live Demo</span>
                <ChevronRight size={20} className="ml-1" />
              </a>
            )}
            <p className="text-gray-500 italic mt-6">
              (Expand on the project's challenges, your role, the impact, and specific technical decisions here.)
            </p>
          </div>
        )}

        {type === 'experience' && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{content.title}</h3>
            <p className="text-xl text-blue-700 font-semibold mb-1">{content.company}</p>
            <p className="text-lg text-gray-600 mb-4">{content.duration}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{content.description}</p>
            <p className="text-gray-500 italic mt-4">
              (Add more specific achievements, key responsibilities, technologies used, and quantifiable impacts for this role here.)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
