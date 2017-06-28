import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems: [
                {
                    link: 'https://google.com',
                    title: 'GOOGLE'
                },
                {
                    link: 'https://yahoo.com',
                    title: 'YAHOO'
                }
            ]
        };
    }
    render(){
        const listItems = this.state.menuItems.map((item, index) => {
            return (
                <li key={index}>
                    <a href={item.link}>{item.title}</a>
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