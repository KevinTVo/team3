import React from 'react';
import './App.css';

import DrRegister from "./components/drRegister";
import ClientRegister from "./components/clientRegister";

import { ClientOnGoingTable } from './components/clientOnGoingTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <ClientRegister />

          <ClientOnGoingTable />
      </header>
    </div>
  );
}

export default App;
