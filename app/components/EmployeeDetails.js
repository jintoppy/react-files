import React, {Component} from 'react';
import 'whatwg-fetch'

class EmployeeDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeUser: null
        };
    }
    componentDidMount(){
        if(this.props.params){
            fetch(`https://api.github.com/users/${this.props.params.username}`)
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