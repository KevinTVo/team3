import React from 'react';
import '../css/clientCaseManagementPage.css'

export class DrHistoryTable extends React.Component
{


    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor


        this.state = {
            postId: null,
            //state is by default an object
            //caseTitle | Status | Doctor | Category | Created On | Diagnosed On
            cases: [
                { id: 1, caseTitle: 'Irregular Heart Beat', case_status: 'Patient Canceled', category: 'Cardiology', createDate: '05/17/20', completedDate: '05/27/20'},
                { id: 2, caseTitle: 'Milk upsets stomach', case_status: 'Completed', category: 'Allergy and Immunology', createDate: '08/27/20', completedDate: '09/21/20'},
                { id: 3, caseTitle: 'Morning depressions', case_status: 'Physician Canceled', category: 'Mental', createDate: '06/27/20', completedDate: '06/27/20'},
                { id: 4, caseTitle: 'path_kev11741_00', case_status: 'Completed', category: 'Pathology', createDate: '07/29/20', completedDate: '07/30/20'}
            ]
        };
    }
    componentDidMount() {
        //POST request with a JSON body with fetch function
        //POST b/c medical database
        const requestOptions =
        {
                method: 'POST',
                body: JSON.stringify({id: 'What?'}, {caseTitle: 'What?'}, {patient: 'What?'}, {case_status: 'What?'},
                    {category: 'What?'}, {createDate: 'What?'}, {completedDate: 'What?'})
        };

        fetch(`ERIC'S IP_ADDRESS`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id}))
    }





    renderTableData() {
        return this.state.cases.map((casestudy, index) => {
            const { id, caseTitle, case_status, category, createDate, completedDate } = casestudy //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{caseTitle}</td>
                    <td>{case_status}</td>
                    <td>{category}</td>
                    <td>{createDate}</td>
                    <td>{completedDate}</td>

                </tr>


            )
        })
    }

    render()
    {

        return(
            <div>
                <h1 id='title'><u>Completed Cases:</u></h1>
                <table>
                    <thead style={{display: 'table-header-group'}}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Created On</th>
                        <th>Completed On</th>
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