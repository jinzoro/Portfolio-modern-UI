import React from 'react';

// Helper component for animated cards
// Accepts an 'animationType' prop and an optional 'onClick' handler
const AnimatedCard = ({ children, delay = 0, animationType = 'fade-in-up', onClick }) => (
  <div
    className={`bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
               opacity-0 animate-${animationType} ${onClick ? 'cursor-pointer' : ''}`} // Add cursor-pointer if clickable
    style={{ animationDelay: `${delay}ms` }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default AnimatedCard;
