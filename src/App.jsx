import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoApp from './components/TodoApp';
import Auth from './components/Auth';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (username, password) => {
    if (username === 'adm' && password === 'pass') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} logout={logout} />
      <main className="flex-grow flex items-center justify-center">
        {isAuthenticated ? <TodoApp /> : <Auth authenticate={authenticate} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
