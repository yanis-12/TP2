// src/components/organisms/LoginSection.tsx
import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <LoginForm />
    </div>
  );
};

export default LoginSection;
