import React, {Component} from 'react';

const EmployeeDetails = (props) => {

    return (
        <div>
            <h2>Selected Employee</h2>
            <h3>{props.selectedEmployee? props.selectedEmployee.name: ''}</h3>
        </div>
    )
};

export default EmployeeDetails;