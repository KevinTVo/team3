import React from 'react';
import '../css/clientCaseManagementPage.css'

export class DrRequestTable extends React.Component
{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            cases: [
                { id: 1, caseTitle: 'Chest pain and arm hurts',  category: 'Cardiology', createDate: '08/17/20', action: 'Accept / Decline'},
                { id: 2, caseTitle: 'runny nose and itchy throat',  category: 'Allergy and Immunology', createDate: '08/27/20', action: 'Accept / Decline'},
                { id: 3, caseTitle: 'cried after watching Encino Man',  category: 'Mental', createDate: '08/27/20', action: 'Accept / Decline'},
                { id: 4, caseTitle: 'path_kev11741_01', category: 'Pathology', createDate: '08/29/20', action: 'Accept / Decline'}
            ]
        }

    }


    renderTableData() {
        return this.state.cases.map((casestudy, index) => {
            const { id, caseTitle, category, createDate, action } = casestudy //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{caseTitle}</td>
                    <td>{category}</td>
                    <td>{createDate}</td>
                    <td><u>{action}</u></td>
                </tr>


            )
        })
    }

    render()
    {

        return(
            <div>
                <h1 id='title'><u>Requests:</u></h1>
                <table>
                    <thead style={{display: 'table-header-group'}}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Created On</th>
                        <th>Action</th>
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