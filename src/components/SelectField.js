import React, { useState, useEffect, createRef } from 'react';


const SelectField = (props) => {

    const [label,setLabel] = useState(props.label);
    const [id,setId] = useState(props.id);
    const [name,setName] = useState(props.name);
    const [classes,setClasses] = useState(props.classes);
    const [disabled,setDisabled] = useState(props.disabled);
    const [multiple,setMultiple] = useState(props.multiple);
    const [required,setRequired] = useState(props.required);
    const [options,setOptions] = useState(props.options);
    const [desktop,setDesktop] = useState(true);
    const [selectOption,setSelectOption] = useState('');
    const [isOpen,setIsOpen] = useState(false);

    const selectMobileRef = createRef(); 
    const liRef = createRef(); 

    useEffect(() => { 
        let label = props.label;
        setLabel(label,label);
    },[props.label])

    useEffect(() => { 
        let id = props.id;
        setId(id,id);
    },[props.id])

    useEffect(() => { 
        let name = props.name;
        setName(name,name);
    },[props.name])

    useEffect(() => { 
        let classes = props.classes;
        setClasses(classes,classes);
    },[props.classes])

    useEffect(() => { 
        let disabled = props.disabled;
        setDisabled(disabled,disabled);
    },[props.disabled])

    useEffect(() => { 
        let multiple = props.multiple;
        setMultiple(multiple,multiple);
    },[props.multiple])

    useEffect(() => { 
        let required = props.required;
        setRequired(required,required);
    },[props.required])

    useEffect(() => { 
        let options = props.options;
        //add 'choose an option' as the first option
        if(options[0] !== 'Choose an option')
            options.unshift('Choose an option'); 
        setOptions(options,options);
    },[props.options])

    useEffect(() => { 
        //detect if desktop or mobile
        let checkDesktop = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? false : true;
        //set desktop property accordingly 
        setDesktop(desktop,checkDesktop);
    },[desktop])


    

    const choseOption = (e) =>{
        let selectedOption = e.target;
        let selectedOptionIndex = selectedOption.attributes.index.value;
        let selectNative = selectMobileRef.current;

        //set the mobile select to the selected option as the desktop div 
        selectNative.selectedIndex = selectedOptionIndex;  

        setSelectOption(`${e.target.innerText}`);
        setIsOpen('');

        if(props.change){
            props.change(e.target.innerText);
        }
    }

    const choseOptionMobile = (e) =>{
        let selectedOption = e.target.value;
        setSelectOption(selectedOption);
        setIsOpen('');

        if(props.change){
            props.change(selectedOption);
        }
    }

    const toggleDropdown = () =>{
        let collapsed = isOpen;
        setIsOpen(!collapsed);
    } 

    const onBlur = () =>{
        setIsOpen(false);

    }

    return (
        <div className="select-wrapper">

                <div className={`select`} name={name}>
                    <div 
                        className={`field ${classes} ${selectOption ? "with-value" : "" } ${isOpen ? "open" : ""}`} 
                        tabIndex={0}
                        onClick={() => toggleDropdown()}
                        onBlur={() => onBlur()}
                    >
                        <span className="label">{label}</span>
                        <span className="selected">{selectOption}</span>
                        <i className={"icon toggle-icon"}>
                            <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" style={{enableBackground:"new 0 0 20 12"}}><path className="path" d="M18.2,1.9L10,10.1L1.8,1.9"/></svg>
                        </i>
                        <ul className={`dropdown`}>
                            {options.map((key,index) => {
                                return (
                                    <li className="option" ref={liRef} key={index} index={index} label={key} value={key.toLowerCase()} onClick={e => choseOption(e)}>{key}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                
                {/* //mobile elemet - native */} 
                <label className={"select-mobile"}>{label}
                    <select 
                        ref={selectMobileRef}
                        id={id} 
                        name={name} 
                        disabled={disabled} 
                        multiple={multiple} 
                        required={required} 
                        onChange={e => choseOptionMobile(e)} >
        
                        {options.map((key,index) => {
                            return (
                                <option key={index} value={key.toLowerCase()}>{key}</option>
                            )
                        })}
        
                    </select>
                </label>
        </div>
    );
}   


export default SelectField;