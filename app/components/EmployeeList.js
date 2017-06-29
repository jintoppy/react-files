import React, {Component} from 'react';
import {Link} from 'react-router';

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
    render(){
        const employees = this.props.employees.map((emp, index) => {
            return (
                <tr key={index}>
                    <td>{emp.login}</td>
                    <td>{emp.id}</td>
                    <td>
                        <Link to={"/userdetails/"+emp.login}>View Details</Link>
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
                            ref="empId" /> <br/>                
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