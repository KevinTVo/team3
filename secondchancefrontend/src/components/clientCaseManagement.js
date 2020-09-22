import React from 'react';

import {ClientHistoryTable} from './clientHistoryTable';
import {ClientOnGoingTable} from './clientOnGoingTable';

export class ClientCaseManagement extends React.Component
{
  render() {
      return(
          <div>
              <ClientOnGoingTable />
              <ClientHistoryTable />
          </div>
      );
  }
};