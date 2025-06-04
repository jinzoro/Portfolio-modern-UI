import React, { useState, useEffect } from 'react';
import portfolioData from './data/portfolioData'; // Import portfolio data - Removed .js extension
import SectionTitle from './components/SectionTitle'; // Import SectionTitle component - Removed .js extension
import AnimatedCard from './components/AnimatedCard'; // Import AnimatedCard component - Removed .js extension
import DetailModal from './components/DetailModal'; // Import DetailModal component - Removed .js extension

// Import all Lucide React icons used in App.js
import {
  Mail,
  Linkedin,
  Github,
  ChevronRight,
  Lightbulb,
  Briefcase,
  Code,
  Rocket
} from 'lucide-react';

function App() {
  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalType, setModalType] = useState(''); // 'skill', 'project', or 'experience'

  const openModal = (content, type) => {
    setModalContent(content);
    setModalType(type);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
    setModalType('');
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Effect for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the 'active' class to trigger the animation
            entry.target.classList.add(`${entry.target.classList.value.match(/animate-(\w+-?\w+)/)?.[0]}-active` || 'animate-fade-in-up-active');
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe all elements that have an animation class
    document.querySelectorAll('[class*="animate-"]').forEach((el) => {
      // Exclude elements that are part of the navigation or hero section which have initial animations
      if (!el.closest('nav') && !el.closest('header')) {
        observer.observe(el);
      }
    });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md rounded-b-3xl mx-auto max-w-5xl mt-4 p-4 flex justify-center items-center space-x-6">
        {portfolioData.sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200 flex items-center space-x-2
                       opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${100 * (index + 1)}ms` }}
          >
            {section.icon && <section.icon size={20} />}
            <span>{section.title}</span>
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Gradient Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-500"></div>
        </div>

        <div className="relative z-10">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300 mx-auto mb-6 shadow-lg border-4 border-white overflow-hidden
                          opacity-0 animate-zoom-in animate-delay-200">
            {/* Placeholder for profile picture */}
            <img
              src="https://placehold.co/160x160/b0c4de/ffffff?text=Profile"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/160x160/b0c4de/ffffff?text=Profile"; }}
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight opacity-0 animate-fade-in-up animate-delay-300">
            {portfolioData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-blue-700 font-semibold mb-8 opacity-0 animate-fade-in-up animate-delay-400">
            {portfolioData.title}
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto opacity-0 animate-fade-in-up animate-delay-500">
            {portfolioData.bio}
          </p>
          <div className="mt-10 flex justify-center space-x-6 opacity-0 animate-fade-in-up animate-delay-600">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
            <a
              href="#projects"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {portfolioData.sections.map((section, sectionIndex) => (
          <section key={section.id} id={section.id} className="mb-24 pt-16">
            <SectionTitle title={section.title} icon={section.icon} />

            {section.id === "about" && (
              <AnimatedCard delay={100 * (sectionIndex + 1)} animationType="fade-in-up">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </AnimatedCard>
            )}

            {section.id === "skills" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {section.content.map((skillCategory, idx) => (
                  <AnimatedCard
                    key={idx}
                    delay={100 * (sectionIndex + 1) + idx * 150}
                    animationType={idx % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                    onClick={() => openModal(skillCategory, 'skill')}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      {skillCategory.icon && <skillCategory.icon size={28} className="text-blue-500" />}
                      <h3 className="text-2xl font-bold text-gray-800">{skillCategory.category}</h3>
                    </div>
                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                      {skillCategory.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="flex items-center">
                          <ChevronRight size={18} className="text-blue-400 mr-2 flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                ))}
              </div>
            )}

            {section.id === "experience" && (
              <div className="space-y-10">
                {section.content.map((job, idx) => (
                  <AnimatedCard
                    key={idx}
                    delay={100 * (sectionIndex + 1) + idx * 150}
                    animationType="zoom-in"
                    onClick={() => openModal(job, 'experience')}
                  >
                    <div className="flex items-start space-x-4">
                      <Briefcase size={32} className="text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <p className="text-xl text-blue-700 font-semibold mb-1">{job.company}</p>
                        <p className="text-md text-gray-600 mb-3">{job.duration}</p>
                        <p className="text-lg text-gray-700 leading-relaxed">{job.description}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            )}

            {section.id === "projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.content.map((project, idx) => (
                  <AnimatedCard
                    key={idx}
                    delay={100 * (sectionIndex + 1) + idx * 150}
                    animationType={idx % 2 === 0 ? "slide-in-right" : "slide-in-left"}
                    onClick={() => openModal(project, 'project')}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking the link
                    >
                      View Project
                      <ChevronRight size={18} className="ml-1" />
                    </a>
                  </AnimatedCard>
                ))}
              </div>
            )}

            {section.id === "contact" && (
              <AnimatedCard delay={100 * (sectionIndex + 1)} animationType="fade-in-up">
                <p className="text-lg text-gray-700 mb-6 text-center">
                  Feel free to reach out to me through any of the channels below!
                </p>
                <div className="flex justify-center space-x-6 md:space-x-8">
                  <a
                    href={`mailto:${section.content.email}`}
                    className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <Mail size={48} className="mb-2" />
                    <span className="text-lg font-medium">Email</span>
                  </a>
                  <a
                    href={section.content.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <Linkedin size={48} className="mb-2" />
                    <span className="text-lg font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={section.content.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <Github size={48} className="mb-2" />
                    <span className="text-lg font-medium">GitHub</span>
                  </a>
                </div>
              </AnimatedCard>
            )}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center rounded-t-3xl">
        <p className="text-lg mb-2 opacity-0 animate-fade-in-up animate-delay-800">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <p className="text-md text-gray-400 opacity-0 animate-fade-in-up animate-delay-900">
          Built with React & Tailwind CSS.
        </p>
      </footer>

      {/* Render the Detail Modal if showModal is true */}
      {showModal && (
        <DetailModal
          content={modalContent}
          type={modalType}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
