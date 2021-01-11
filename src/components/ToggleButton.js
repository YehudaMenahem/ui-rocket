import React,{ useState,useEffect } from 'react';


const ToggleButton = (props) => {

    const [label,setLabel] = useState(props.label);
    const [name,setName] = useState(props.name);
    const [value,setValue] = useState(props.value);
    const [classes,setClasses] = useState(props.classes);
    const [id,setId] = useState(props.id);
    const [isChecked,setIsChecked] = useState(props.checked);
    const [disabled,setDisabled] = useState(props.disabled);
    const [required,setRequired] = useState(props.required);
    const [labelPosition,setLabelPosition] = useState(props.labelPosition);

    useEffect(() =>{
        let label = props.label ? props.label : '';
        setLabel(label,label);
    },[props.label])

    useEffect(() =>{
        let name = props.name ? props.name : '';
        setName(name,name);
    },[props.name])

    useEffect(() =>{
        let value = props.value ? props.value : '';
        setValue(value,value);
    },[props.value])

    useEffect(() =>{
        let classes = props.classes ? props.classes : '';
        setClasses(classes,classes);
    },[props.classes])

    useEffect(() =>{
        let id = props.id;
        setId(id,id);
    },[props.id])

    useEffect(() =>{
        let name = props.name ? props.name : '';
        setName(name,name);
    },[props.name])

    useEffect(() =>{
        let isChecked = props.checked ? props.checked : false;
        setIsChecked(isChecked,isChecked);
    },[props.checked])

    useEffect(() =>{
        let disabled = props.disabled ? props.disabled : false;
        setDisabled(disabled,disabled);
    },[props.disabled])

    useEffect(() =>{
        let required = props.required ? props.required : false;
        setRequired(required,required);
    },[props.required])

    useEffect(() =>{
        let labelPosition = props.labelPosition ? props.labelPosition : 'default';
        setLabelPosition(labelPosition,labelPosition);
    },[props.labelPosition])

    const handleChange = (e) => {
        setIsChecked(isChecked, e.target.checked);
        if(props.change){
            let checked = e.target.checked;
            props.change(checked)
        }
    }
    
    return(
        <label 
            className={`toggle-button ${classes} ${labelPosition} ${isChecked ? 'checked' : ''}`}>
            <span className={`label`}>{label}</span>
            <span className="switch">
                <input 
                    type="checkbox" 
                    id={id}
                    name={name} 
                    value={value}
                    defaultChecked={isChecked} 
                    onChange={handleChange} 
                    required={required} 
                    disabled={disabled}/>
                <span className="circle-bg"></span>
                <span className="circle"></span>
            </span>
        </label>
    );

}

export default ToggleButton;

