import React from 'react';
import '../css/clientCaseManagementPage.css'


export class DrOnGoingTable extends React.Component
{


    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            //ID | Case Title | Status | Category | Created On | Accepted On
            cases: [
                { id: 1, caseTitle: 'Irregular Heart Beat', case_status: 'Patient Canceled', category: 'Cardiology', createDate: '05/17/20', acceptedOn: '05/20/20', docCancel: 'Cancel'},
                { id: 2, caseTitle: 'Milk upsets stomach', case_status: 'Completed', category: 'Allergy and Immunology', createDate: '08/27/20', acceptedOn: '08/27/20', docCancel: 'Cancel'},
                { id: 3, caseTitle: 'Morning depressions', case_status: 'Physician Canceled', category: 'Mental', createDate: '06/27/20', acceptedOn: '06/30/20', docCancel: 'Cancel'},
                { id: 4, caseTitle: 'path_kev11741_00', case_status: 'Completed', category: 'Pathology', createDate: '07/29/20', acceptedOn: '08/07/20', docCancel: 'Cancel'}
            ]
        }

    }


    renderTableData() {
        return this.state.cases.map((casestudy, index) => {
            const { id, caseTitle, case_status, category, createDate, acceptedOn, docCancel } = casestudy //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{caseTitle}</td>
                    <td>{case_status}</td>
                    <td>{category}</td>
                    <td>{createDate}</td>
                    <td>{acceptedOn}</td>
                    <td><u>{docCancel}</u></td>
                </tr>


            )
        })
    }

    render()
    {

        return(
            <div>
                <h1 id='title'><u>Ongoing Cases:</u></h1>
                <table>
                    <thead style={{display: 'table-header-group'}}>
                    <tr>
                        <th>ID</th>
                        <th>Case Title</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Created On</th>
                        <th>Accepted On</th>
                        <th>Cancel Option</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}