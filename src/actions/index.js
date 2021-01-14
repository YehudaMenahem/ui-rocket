//Action creator 
export const setModal = (modalSettings) =>{
    return {
        type: 'MODAL_SETTINGS',
        payload: modalSettings
    };
};

export const setToaster = (toasterSettings) =>{
    return {
        type: 'TOASTER_SETTINGS',
        payload: toasterSettings
    };
};