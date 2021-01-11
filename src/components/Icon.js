import React,{ useState,useEffect } from 'react';


// class Icon extends React.Component {
const Icon = (props) => {

    const [classes, setClasses] = useState(props.classes);
    const [iconClass, setIconClass] = useState(props.iconClass);

    useEffect(() => {
        let classes = props.classes;
        setClasses(classes,classes);
    },[props.classes]);

    useEffect(() => {
        let iconClass = props.iconClass;
        setIconClass(iconClass,iconClass);
    },[props.iconClass]);

    // state = {
    //     classes:this.props.classes,
    //     iconClass:this.props.iconClass,
    //     click: this.props.click
    // }

    // static getDerivedStateFromProps(props){
    //     return { 
    //         classes: props.classes,
    //         iconClass: props.iconClass,
    //         click: props.click
    //     }
    // }

    // click = (event) =>{
    //     if(props.click){
    //         props.click(event.target);
    //     }
    // }

    return (
        <span className={`icon-wrapper ${classes}`}>
            <i className={`icon ${iconClass}`} onClick={props.click}></i>
        </span>
    );
};

// Icon.defaultProps = {
//     classes: '',
//     iconClass: '',

// }

export default Icon; 