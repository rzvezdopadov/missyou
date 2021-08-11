import './App.css';

import React from 'react';

import {ModuleNavbar} from './components/ModuleNavbar'
import {ModulePanel} from './components/ModulePanel';

// import {ButtonBar} from './components/ButtonBar';
// import {ContentBar} from './components/ContentBar';
// import {PartnersBar} from './components/PartnersBars';



function App() {
  return (
    <div className="container">
      <ModuleNavbar />
      <ModulePanel />
    </div>
  );
}

export default App;

