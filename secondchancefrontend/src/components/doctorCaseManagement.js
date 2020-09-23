import React from 'react';

import {DrRequestTable} from './drRequestTable';
import {DrOnGoingTable} from './drOnGoingTable';
import {DrHistoryTable} from './drHistoryTable';

export class DrCaseManagement extends React.Component
{
  render() {
      return(
          <div>
              <h2 style={{textAlign: 'center'}}><u>Case Management</u></h2>
              <DrOnGoingTable />
              <DrRequestTable />
              <DrHistoryTable />
          </div>
      );
  }
};