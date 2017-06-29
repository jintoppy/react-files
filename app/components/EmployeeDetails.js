import React, {Component} from 'react';
import 'whatwg-fetch'

class EmployeeDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeUser: null
        };
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.selectedEmployee){
            if(!this.props.selectedEmployee){
                return true;
            }
            return nextProps.selectedEmployee.login !== this.props.selectedEmployee.login;
        }
        return false;        
    }
    componentDidUpdate(){
        const {selectedEmployee} = this.props;
        if(selectedEmployee){
            fetch(`https://api.github.com/users/${selectedEmployee.login}`)
                .then(res => res.json())
                .then(res => this.setState({
                    activeUser: res
                }));
        }
        
    }
    render(){
        const {activeUser} = this.state;
        return (
            <div>
                <h2>Selected Employee</h2>
                <h3>{activeUser? activeUser.login: ''}</h3>
            </div>
        )
    }    
};

export default EmployeeDetails;