import {register} from '../AppDispatcher';
import {EventEmitter} from 'events';

const mydata = {
    employees: [],
    selectedEmployee: null
};


const EmployeeStore = Object.assign(EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on('CHANGE', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('CHANGE', callback);
    },
    emitChange: function(){
        this.emit('CHANGE');
    },
    dispatcherIndex: register(function(action){
        switch(action.actionType){
            case 'EMPLOYEELIST_RECEIVED':
                mydata.employees = action.payload;
            break;
        }
        EmployeeStore.emitChange();
    }),
    getState: function(){
        return mydata;
    }
});

export default EmployeeStore;