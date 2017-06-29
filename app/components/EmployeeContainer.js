import React, {Component} from 'react';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import 'whatwg-fetch'

class EmployeeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            employees: [],
            selectedEmployee: null
        };
    }
    onSelectedEmployeeChange(employee){
        this.setState({
            selectedEmployee: employee
        });
    }
    componentWillMount(){
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(res => this.setState({
                employees: res
            }));
    }
    render(){
        return (
            <div>
                Employee Container
                <EmployeeList 
                    employees={this.state.employees}
                    onSelectedEmployeeChange={this.onSelectedEmployeeChange.bind(this)}
                 />
                 <EmployeeDetails 
                    selectedEmployee={this.state.selectedEmployee}
                 />
            </div>
        )
    }
}

export default EmployeeContainer;