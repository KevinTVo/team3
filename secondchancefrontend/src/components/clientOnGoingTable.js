import React from 'react';
import '../css/clientCaseManagementPage.css'

export class ClientOnGoingTable extends React.Component
{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            cases: [
                { id: 1, caseTitle: 'Chest pain and arm hurts', doctor: 'Maria Anders', category: 'Cardiology', createDate: '08/17/20', status: 'Pending'},
                { id: 2, caseTitle: 'runny nose and itchy throat', doctor: 'Christina Berglund.', category: 'Allgery and Immunology', createDate: '08/27/20', status: 'Diagnosing'},
                { id: 3, caseTitle: 'cried after watching Encino Man', doctor: 'Francisco Chang', category: 'Mental', createDate: '08/27/20', status: 'Pending'},
                { id: 4, caseTitle: 'path_kev11741_01', doctor: 'Maria Anders', category: 'Pathology', createDate: '08/29/20', status: 'Diagnosing'}
            ]
        }

    }


    renderTableData() {
        return this.state.cases.map((casestudy, index) => {
            const { id, caseTitle, doctor, category, createDate, status } = casestudy //destructuring
            return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{caseTitle}</td>
                            <td>{doctor}</td>
                            <td>{category}</td>
                            <td>{createDate}</td>
                            <td>{status}</td>
                            <td><u>Cancel</u></td>
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
                        <th>Name</th>
                        <th>Doctor</th>
                        <th>Category</th>
                        <th>Created On</th>
                        <th>Status</th>
                        <th>Request Refund</th>
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

