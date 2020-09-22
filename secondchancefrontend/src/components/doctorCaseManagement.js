import React from 'react';

import {DrRequestTable} from './drRequestTable';
import {DrOnGoingTable} from './drOnGoingTable';
import {DrHistoryTable} from './drHistoryTable';

export class DrCaseManagement extends React.Component
{
  render() {
      return(
          <div>
              <DrOnGoingTable />
              <DrRequestTable />
              <DrHistoryTable />
          </div>
      );
  }
};