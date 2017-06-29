import React, {Component} from 'react';
import {Link} from 'react-router';
import EmployeeStore from '../stores/EmployeeStore';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            employeesCount: EmployeeStore.getState().employees.length,
            menuItems: [
                {
                    link: '/userdetails',
                    title: 'User Details'
                },
                {
                    link: '/adduser',
                    title: 'Add User'
                },
                {
                    link: '/',
                    title: 'Home'
                }
            ]
        };
    }
    componentDidMount(){
        EmployeeStore.addChangeListener(this.handleChange.bind(this));
    }
    componentWillUnmount(){
        EmployeeStore.removeChangeListener(this.handleChange.bind(this));
    }
    handleChange(){
        this.setState({
            employeesCount: EmployeeStore.getState().employees.length
        });
    }
    render(){
        const listItems = this.state.menuItems.map((item, index) => {
            return (
                <li key={index}>
                    <Link 
                        activeClassName="active" 
                        to={item.link}>
                            {item.title}
                    </Link>
                </li>
            )
        });
        return (
            <div className="header">
                <div className="logo">

                </div>
                <div className="nav">
                    <ul>
                        {listItems}
                    </ul>
                    <span>
                        Count: {this.state.employeesCount}
                    </span>
                </div>
                
            </div>
        )
    }
}

export default Header;