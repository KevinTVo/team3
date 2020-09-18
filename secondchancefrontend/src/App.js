import React from 'react';
import './App.css';

import DrRegister from "./components/drRegister";
import { ClientOnGoingTable } from './components/clientOnGoingTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <DrRegister />

          <ClientOnGoingTable />
      </header>
    </div>
  );
}

export default App;
