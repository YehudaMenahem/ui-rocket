import React,{ useState,useEffect } from 'react';


const RadioButton = (props) => {

    const [name,setName] = useState(props.name);
    const [val,setVal] = useState(props.val);
    const [id,setId] = useState(props.id);
    const [classes,setClasses] = useState(props.classes);
    const [label,setLabel] = useState(props.label);
    const [disabled,setDisabled] = useState(props.disabled);
    const [isSelected,setIsSelected] = useState(props.isSelected);

    useEffect(()=> {
        let name = props.name || '';
        setName(name,name);
    },[props.name])

    useEffect(()=> {
        let val = props.val || '';
        setVal(val,val);
    },[props.val])

    useEffect(()=> {
        let id = props.id;
        setId(id,id);
    },[props.id])

    useEffect(()=> {
        let classes = props.classes;
        setClasses(classes,classes);
    },[props.classes])

    useEffect(()=> {
        let label = props.label;
        setLabel(label,label);
    },[props.label])

    useEffect(()=> {
        let disabled = props.disabled;
        setDisabled(disabled,disabled);
    },[props.disabled])

    useEffect(()=> {
        let isSelected = props.isSelected ? props.isSelected : false;
        setIsSelected(isSelected,isSelected);
    },[props.isSelected])

    const change = (e) =>{
        if(props.change){
            props.change(e);
        }
    }

    return (
        <label htmlFor={id} className={`radio-button ${classes} ${isSelected ? "selected" : ""}`}>
            <span className="radio">
                <input 
                    type={"radio"} 
                    id={id} 
                    name={name} 
                    value={val} 
                    onChange={(e) => change(e)}
                    disabled={disabled} 
                    checked={isSelected}
                />
                <span className="icon">
                    <svg id="radio-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        <path className="check" d="M21,15a6,6,0,1,1-6-6A6,6,0,0,1,21,15Z"/>
                        <path className="ring" d="M15,5A10,10,0,1,1,5,15,10,10,0,0,1,15,5m0-3A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z"/>
                    </svg>
                </span>
                <span className="label">
                    {label}
                </span>
            </span>
        </label>
    );
}

export default RadioButton;