import React, {Component} from 'react';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import EmployeeStore from '../stores/EmployeeStore';
import EmployeeActions from '../actions/EmployeeActions';
import 'whatwg-fetch'

class EmployeeContainer extends Component{
    constructor(props){
        super(props);
        this.state = EmployeeStore.getState();
    }
    componentDidMount(){
        EmployeeStore.addChangeListener(this.handleChange);
    }
    handleChange(){
        const newState = EmployeeStore.getState();
        this.setState(newState);
    }
    componentWillUnmount(){
        EmployeeStore.removeChangeListener(this.handleChange);
    }
    onSelectedEmployeeChange(employee){
        this.setState({
            selectedEmployee: employee
        });
    }
    componentWillMount(){
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(res => EmployeeActions.onEmployeeListReceived(res));
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