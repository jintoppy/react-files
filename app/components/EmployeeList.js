import React, {Component} from 'react';

class EmployeeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUser: {
                name: '',
                empId: ''
            }
        };
    }
    shouldComponentUpdate(){
        return false;
    }
    render(){
        console.log('render of EMployee List');
        const employees = this.props.employees.map((emp, index) => {
            return (
                <tr key={index}>
                    <td>{emp.name}</td>
                    <td>{emp.empId}</td>
                    <td>
                        <button 
                            onClick={this.props.onSelectedEmployeeChange.bind(null, emp)}>
                            View Details
                        </button>
                    </td>
                </tr>
            )
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employee ID</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees}
                    </tbody>
                </table>
                <form>
                    Name: <input ref="name" /> <br/>                
                    EmpId: <input 




;'/'                            ref="empId" /> <br/>                
                    <button onClick={this.onAdd.bind(this)}>Add</button>
                </form>
            </div>
        )
    }

    onAdd(event){
        event.preventDefault();
        console.log(this.refs.name);
    }
    
}


export default EmployeeList;