import { combineReducers } from 'redux';

const modalSettings = (modalSet={showModal:false},action) =>{
    if(action.type === 'MODAL_SETTINGS'){
        return action.payload;
    }

    return modalSet;
}

const toasterSettings = (toasterSet={showtoaster:false},action) =>{
    if(action.type === 'TOASTER_SETTINGS'){
        return action.payload;
    }

    return toasterSet;
}

export default combineReducers({
    modalSettings: modalSettings,
    toasterSettings: toasterSettings
});
