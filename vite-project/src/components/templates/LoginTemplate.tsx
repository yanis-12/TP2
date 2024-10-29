// src/components/templates/LoginTemplate.tsx
import React from 'react';
import LoginSection from '../organisms/LoginSection';

const LoginTemplate: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-50">
      <div className="w-full md:w-1/2 flex flex-col items-center">
        {/* Titre en haut */}
        <h1 className="text-4xl font-bold text-black mb-8 text-center mt-12 ml-4">Tree Learning</h1>

    
        {/* Section de connexion */}
        <LoginSection />
      </div>
      <div className="hidden md:flex flex-col items-center justify-center w-1/2">
        <h2 className="text-xl font-bold">Company Logo</h2>
        <p className="text-gray-500 mt-2 text-center">
          Here you can include additional information about the company or relevant content.
        </p>
      </div>
    </div>
  );
};

export default LoginTemplate;
