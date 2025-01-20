import React from 'react';
import LogoutButton from './LogoutButton';

const Header = ({ isAuthenticated, logout }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">To-Do List Application</h1>
      {isAuthenticated && <LogoutButton logout={logout} />}
    </header>
  );
};

export default Header;