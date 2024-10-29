// src/components/molecules/LoginForm.tsx
import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const LoginForm: React.FC = () => {
  return (
    <form className="bg-white p-6 shadow-md rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-center text-xl font-bold mb-6">Login In</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Mot de passe" />
      <div className="flex items-center mt-2">
        <input type="checkbox" className="mr-2" />
        <label className="text-sm">Keep me logged</label>
      </div>
      <Button label="Se connecter" />
      <p className="text-center mt-4 text-sm">
        Mot de passe oublié? <a href="#" className="text-blue-500">Réinitialiser</a>
      </p>
    </form>
  );
};

export default LoginForm;
