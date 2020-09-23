import React from 'react';
import '../css/clientCaseManagementPage.css'

class History_printTableHead extends React.Component{
    render()
    {
        if ((this.props.index % 5) === 0) {

            return (
                <div>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Doctor</th>
                        <th>Category</th>
                        <th>Created On</th>
                        <th>Completed On</th>
                    </tr>
                    </thead>
                </div>
            );
        } else {
            return (<div>
                <tr>
                    <script>{this.props.index}</script>
                </tr>
            </div>);
        }
    }
};

export class ClientHistoryTable extends React.Component
{
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            cases: [
                { id: 1, caseTitle: 'Irregular Heart Beat', doctor: 'Maria Anders', category: 'Cardiology', createDate: '05/17/20', completedDate: '05/27/20'},
                { id: 2, caseTitle: 'Milk upsets stomach', doctor: 'Christina Berglund.', category: 'Allgery and Immunology', createDate: '08/27/20', completedDate: '09/21/20'},
                { id: 3, caseTitle: 'Morning depressions', doctor: 'Francisco Chang', category: 'Mental', createDate: '06/27/20', completedDate: '06/27/20'},
                { id: 4, caseTitle: 'path_kev11741_00', doctor: 'Maria Anders', category: 'Pathology', createDate: '07/29/20', completedDate: '07/30/20'}
            ]
        }

    }


    renderTableData() {
        return this.state.cases.map((casestudy, index) => {
            const { id, caseTitle, doctor, category, createDate, completedDate } = casestudy //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{caseTitle}</td>
                    <td>{doctor}</td>
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
                        <th>Doctor</th>
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