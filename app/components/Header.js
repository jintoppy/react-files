import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
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
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default Header;