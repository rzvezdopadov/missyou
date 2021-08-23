import './App.css';

import React from 'react';

import {ModuleNavbar} from './components/ModuleNavbar'
import {ModulePanel} from './components/ModulePanel';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/authContext';



function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthentificated = !!token

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthentificated
    }}>
      <div className="container">
        <ModuleNavbar />
        <ModulePanel />
      </div>
    </AuthContext.Provider>
  );
}

export default App;

