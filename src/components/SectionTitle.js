import React from 'react';

// Helper component for section titles with animation
const SectionTitle = ({ title, icon: Icon }) => (
  <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center justify-center space-x-3 opacity-0 animate-fade-in-up">
    {Icon && <Icon size={36} className="text-blue-600" />}
    <span>{title}</span>
  </h2>
);

export default SectionTitle;
