import React, { createRef } from 'react';

//import components

class SelectField extends React.Component{

    state = {
        label:this.props.label,
        id:this.props.id,
        name:this.props.name,
        classes:this.props.classes,
        disabled:this.props.disabled,
        multiple:this.props.multiple,
        required:this.props.required,
        selectOption:"",
        isOpen: false,
        desktop: true,
        options: this.props.options
    }

    selectMobileRef = createRef(); 
    liRef = createRef(); 

    componentDidMount(){
        //detect if desktop or mobile
        let checkDesktop = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? false : true;
        //set desktop property accordingly 
        this.setState({
            desktop: checkDesktop
        })
        //add chooose an option as the first option
        let options = this.state.options;
        if(options[0] !== 'Choose an option')
            options.unshift('Choose an option'); 
        this.setState({
            options: options
        })
    }

    static getDerivedStateFromProps(props) {
        return {
            label: props.label,
            id: props.id,
            name: props.name,
            classes: props.classes,
            disabled: props.disabled,
            multiple: props.multiple,
            required: props.required,
            options: props.options
        }
    }

    choseOption = (e) =>{
        let selectedOption = e.target;
        let selectedOptionIndex = selectedOption.attributes.index.value;
        let selectNative = this.selectMobileRef.current;

        //set the mobile select to the selected option as the desktop div 
        selectNative.selectedIndex = selectedOptionIndex;  

        this.setState({
            selectOption: `${e.target.innerText}`,
            isOpen: ""
        });

        if(this.props.change){
            this.props.change(e.target.innerText);
        }
    }

    choseOptionMobile = (e) =>{
        let selectedOption = e.target.value;
        this.setState({
            selectOption: selectedOption,
            isOpen: ""
        });

        if(this.props.change){
            this.props.change(selectedOption);
        }
    }

    toggleDropdown = () =>{
        let state = this.state.isOpen;
        this.setState({
            isOpen: !state
        })
    } 

    onBlur = () =>{
        this.setState({
            isOpen: false
        })
    }

    render(){
        return (
            <div className="select-wrapper">

                    <div className={`select`} name={this.state.name}>
                        <div 
                            className={`field ${this.state.placeholder ? "placeholder":""} ${this.state.selectOption ? "with-value" : "" } ${this.state.isOpen ? "open" : ""}`} 
                            tabIndex={0}
                            onClick={() => this.toggleDropdown()}
                            onBlur={() => this.onBlur()}
                        >
                            <span className="label">{this.state.label}</span>
                            <span className="selected">{this.state.selectOption}</span>
                            <i className={"icon toggle-icon"}>
                                <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" style={{enableBackground:"new 0 0 20 12"}}><path className="path" d="M18.2,1.9L10,10.1L1.8,1.9"/></svg>
                            </i>
                            <ul className={`dropdown`}>
                                {this.state.options.map((key,index) => {
                                    return (
                                        <li className="option" ref={this.liRef} key={index} index={index} label={key} value={key.toLowerCase()} onClick={e => this.choseOption(e)}>{key}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    
                    {/* //mobile elemet - native */} 
                    <label className={"select-mobile"}>{this.state.label}
                        <select 
                            ref={this.selectMobileRef}
                            id={this.state.id} 
                            name={this.state.name} 
                            disabled={this.state.disabled} 
                            multiple={this.state.multiple} 
                            required={this.state.required} 
                            onChange={e => this.choseOptionMobile(e)} >
            
                            {this.state.options.map((key,index) => {
                                return (
                                    <option key={index} value={key.toLowerCase()}>{key}</option>
                                )
                            })}
            
                        </select>
                    </label>
            </div>
        );
    }
}   

SelectField.defaultProps = {
    label:'',
    id:undefined,
    name:'',
    classes:'',
    disabled:false,
    multiple:false,
    required:false
}

export default SelectField;