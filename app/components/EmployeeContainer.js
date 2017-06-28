import React, {Component} from 'react';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';

class EmployeeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            employees: [
                {
                    name: 'Vishal',
                    empId: 'E1'
                },
                {
                    name: 'Lakshmi',
                    empId: 'E2'
                }
            ],
            selectedEmployee: null
        };
    }
    onSelectedEmployeeChange(employee){
        this.setState({
            selectedEmployee: employee
        });
    }
    // componentWillMount(){
    //     console.log('inside componentWillMount');
    // }
    // componentDidMount(){
    //     console.log('inside componentDidMount');
    // }
    // shouldComponentUpdate(){
    //     console.log('inside shouldComponentUpdate');
    //     return true;
    // }
    componentWillUpdate(event, nextState, nextProps){
        console.log(nextState);
        console.log(this.state);
        console.log('inside componentWillUpdate');
    }
    // componentDidUpdate(){
    //     console.log('inside componentDidUpdate');
    // }
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