import React from 'react';
import './App.css';
import {ClientCaseManagement} from './components/clientCaseManagement';
import DrRegister from "./components/drRegister";
import ClientRegister from "./components/clientRegister";
import {DrCaseManagement} from "./components/doctorCaseManagement";


import { ClientOnGoingTable } from './components/clientOnGoingTable';

function App() {
    /*

        <DrRegister />
              <ClientCaseManagement />
              <ClientRegister />
              <DrCaseManagement />

     */

  return (
    <div className="App">
      <header className="App-header">


          <ClientCaseManagement />

      </header>
    </div>
  );
}

export default App;