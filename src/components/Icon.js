import React from 'react';


const Icon = (props) => {

    const {classes, iconClass, click} = props

    return (
        <span className={`icon-wrapper ${classes}`}>
            <i className={`icon ${iconClass}`} onClick={click}></i>
        </span>
    );
};

Icon.defaultProps = {
    classes: '',
    iconClass: '',
}

export default Icon; 