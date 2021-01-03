import React from 'react';


class ToggleButton extends React.Component{

    state = {
        label:this.props.label,
        name:this.props.name,
        value:this.props.value,
        classes:this.props.classes,
        id:this.props.id,
        isChecked:this.props.checked,
        disabled:this.props.disabled,
        required:this.props.required,
        labelPosition:this.props.labelPosition
    }

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
            labelPosition:props.labelPosition
        }
    }

    change = (e) => {
        this.setState({
            isChecked: e.target.checked
        });
        if(this.props.change){
            let checked = e.target.checked;
            this.props.change(checked)
        }
    }
    
    render(){
        return(
            <label 
                className={`toggle-button ${this.state.classes} ${this.state.labelPosition} ${this.state.isChecked ? 'checked' : ''}`}>
                <span className={`label`}>{this.state.label}</span>
                <span className="switch">
                    <input 
                        type="checkbox" 
                        name={this.props.name} 
                        value={this.props.value}
                        defaultChecked={this.state.isChecked} 
                        onChange={this.change} 
                        required={this.state.required} 
                        disabled={this.state.disabled}/>
                    <span className="circle-bg"></span>
                    <span className="circle"></span>
                </span>
            </label>
        );
    }

}

ToggleButton.defaultProps = {
    label:'',
    name:undefined,
    value:undefined,
    classes:'',
    id:undefined,
    isChecked:false,
    disabled:false,
    required:false,
    labelPosition:''
}

export default ToggleButton;

