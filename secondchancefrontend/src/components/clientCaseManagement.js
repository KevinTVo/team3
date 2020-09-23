import React from 'react';

import {ClientHistoryTable} from './clientHistoryTable';
import {ClientOnGoingTable} from './clientOnGoingTable';

export class ClientCaseManagement extends React.Component
{
  render() {
      return(
          <div>
              <h2 style={{textAlign: 'center'}}><u>Case Management</u></h2>
              <ClientOnGoingTable />
              <ClientHistoryTable />
          </div>
      );
  }
};