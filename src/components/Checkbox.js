import React from 'react';


class Checkbox extends React.Component {

    state = {
        label:this.props.label,
        name:this.props.name,
        value:this.props.value,
        classes:this.props.classes,
        id:this.props.id,
        isChecked:this.props.checked,
        disabled:this.props.disabled,
        required:this.props.required,
        iconType:this.props.iconType
    };

    static getDerivedStateFromProps(props) {
        return {
            label:props.label,
            name:props.name,
            value:props.value,
            classes:props.classes,
            id:props.id,
            isChecked:props.checked,
            disabled:props.disabled,
            required:props.required,
            iconType:props.iconType
        }
    }

    change = (event) => {
        if(this.props.change){
            this.props.change(event.target);
        }
    };

    renderIcon = () =>{
        let icon;

        switch(this.state.iconType){
            case 'heart':
                icon =  <svg id="check-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style={{enableBackground:"new 0 0 30 30"}}><path className="check" d="M21,4.2c4,0,7.2,3.2,7.2,7.2c0,7.2-13.2,14.4-13.2,14.4S1.8,18.5,1.8,11.4c0-4,3.2-7.2,7.2-7.2l0,0c2.4,0,4.7,1.2,6,3.2C16.3,5.4,18.6,4.2,21,4.2z"/></svg>
                break
            case 'star':
                icon =  <svg id="check-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style={{enableBackground:"new 0 0 30 30"}}><path className={"check"} d="M27.1,11l-7.3-0.7c-0.5,0-0.9-0.3-1-0.8l-2.6-6.3c-0.4-1-1.9-1-2.3,0l-2.6,6.3c-0.2,0.4-0.6,0.7-1,0.8L2.9,11c-1.1,0.1-1.5,1.5-0.7,2.2L7.7,18c0.4,0.3,0.5,0.8,0.4,1.2L6.4,26c-0.3,1.1,0.9,1.9,1.9,1.4l6.1-3.6c0.4-0.2,0.9-0.2,1.3,0l6.1,3.6c1,0.6,2.1-0.3,1.9-1.4l-1.6-6.8c-0.1-0.5,0-0.9,0.4-1.2l5.5-4.8C28.6,12.5,28.2,11.1,27.1,11z"/></svg>
                break
            default:
                icon = <svg id="check-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style={{enableBackground:'new 0 0 30 30'}}><path className="check" d="M28,7.4l-2.6-2.6c-0.8-0.8-2-0.8-2.8,0l-11,11l-4.2-4.2c-0.8-0.8-2-0.8-2.8,0L2,14.2c-0.8,0.8-0.8,2,0,2.8l5.5,5.5c0,0,0.1,0.1,0.1,0.1l2.6,2.6c0.4,0.4,0.9,0.6,1.4,0.6c0.5,0,1-0.2,1.4-0.6l2.6-2.6c0,0,0.1-0.1,0.1-0.1L28,10.2C28.7,9.4,28.7,8.2,28,7.4z"/></svg>
                break
        }

        return icon;
    }

    render(){
        return (
            <label className={`checkbox ${this.state.classes} ${this.state.disabled ? 'disabled' : ''}`}>
                <span className="checkmark">
                    <input 
                        type="checkbox" 
                        name={this.props.name} 
                        value={this.props.value}
                        defaultChecked={this.state.isChecked} 
                        onChange={this.change} 
                        required={this.state.required} 
                        disabled={this.state.disabled}/>
                        <span className={`icon`}>
                            {this.renderIcon()}
                        </span>
                </span>
                <span className={"label mr-l-md"}>{this.state.label}</span>
            </label>
        );
    }
}

Checkbox.defaultProps = {
    label:"",
    name:"",
    value:"",
    theme:"primary",
    classes:"",
    id: undefined,
    isChecked:false,
    disabled:false,
    required:false
}

export default Checkbox;