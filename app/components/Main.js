import React, {Component} from 'react';
import Header from './Header';
import EmployeeContainer from './EmployeeContainer';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'React Training'
        };
    }
    onBtnClick(){
        this.setState({
            name: 'modified name'
        });
    }
    render(){
        return (
            <div>
                <Header />
                <EmployeeContainer />
            </div>
        )
    }
}

export default Main