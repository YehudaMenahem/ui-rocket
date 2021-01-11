import React,{ useState, useEffect } from 'react';


const Button = (props) => {

    const [label,setLabel] = useState(props.label);
    const [styleBtn,setStyleBtn] = useState(props.styleBtn);
    const [size,setSize] = useState(props.size);
    // const [click,setClick] = useState(props.click);
    const [loading,setLoading] = useState(props.loading);
    const [classes,setClasses] = useState(props.classes);
    const [id,setId] = useState(props.id);
    const [rounded,setRounded] = useState(props.rounded);
    const [shadow,setShadow] = useState(props.shadow);
    const [disabled,setDisabled] = useState(props.disabled);
    const [children,setChildren] = useState(props.children);
    const [index,setIndex] = useState(props.index);
    const [scrollToTop,setScrollToTop] = useState(props.scrollToTop);
    const [position,setPosition] = useState(props.position);
    const [type,setType] = useState(props.type);

    useEffect(() => {
        let label = props.label;
        setLabel(label,label);
    },[props.label]);

    useEffect(() => {
        let styleBtn = props.styleBtn ? props.styleBtn : "solid";
        setStyleBtn(styleBtn,styleBtn);
    },[props.styleBtn]);

    useEffect(() => {
        let size = props.size ? props.size : "medium";
        setSize(size,size);
    },[props.size]);

    // useEffect(() => {
    //     let click = props.click;
    //     setClick(click,click);
    // },[props.click]);

    useEffect(() => {
        let loading = props.loading ? props.loading : false;
        setLoading(loading,loading);
    },[props.loading]);

    useEffect(() => {
        let classes = props.classes;
        setClasses(classes,classes);
    },[props.classes]);

    useEffect(() => {
        let id = props.id;
        setId(id,id);
    },[props.id]);

    useEffect(() => {
        let rounded = props.rounded ? props.rounded : true;
        setRounded(rounded,rounded);
    },[props.rounded]);

    useEffect(() => {
        let shadow = props.shadow;
        setShadow(shadow,shadow);
    },[props.shadow]);

    useEffect(() => {
        let disabled = props.disabled;
        setDisabled(disabled,disabled);
    },[props.disabled]);

    useEffect(() => {
        let children = props.children ? props.children : null;
        setChildren(children,children);
    },[props.children]);

    useEffect(() => {
        let index = props.index;
        setIndex(index,index);
    },[props.index]);

    useEffect(() => {
        let scrollToTop = props.scrollToTop;
        setScrollToTop(scrollToTop,scrollToTop);
    },[props.scrollToTop]);

    useEffect(() => {
        let position = props.position;
        setPosition(position,position);
    },[props.position]);

    useEffect(() => {
        let type = props.type ? props.type : 'button';
        setType(type,type);
    },[props.type]);

    //calling parent function
    const clickButton = (event) => {
        if(scrollToTop){
            scrollTop();
            return;
        }

        if(props.click){
            props.click(event);
        }
    }

    const scrollTop = () => {
        window.scroll({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }

    return (
        <button 
            key={props.key} 
            id={id} 
            type={type}
            index={index} 
            className={`button ${loading ? 'loading' : ''} ${styleBtn} ${size} ${rounded ? "rounded" : ""} ${shadow ? "shadow" : ""} ${classes}
                        ${scrollToTop && position ? position : ""}`} 
            onClick={(e)=>clickButton(e)} 
            disabled={disabled}
            >
            {children}
            {loading
                ? 
                <div className="loading-bg">
                    <div className="stage">
                        <div className="dot-pulse"></div>
                    </div>
                </div>
                :
                ""
            }
            <span className="label">{label}</span>
        </button>
    );
}

export default Button;
