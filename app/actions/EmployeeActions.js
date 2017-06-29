import {dispatch} from '../AppDispatcher';

export const onEmployeeListReceived = (employees) => {
    dispatch({
        actionType: 'EMPLOYEELIST_RECEIVED',
        payload: employees
    });
};

export const onAddEmployee = (employee) => {
    dispatch({
        actionType: 'ADD_EMPLOYEE',
        payload: employee
    });
};