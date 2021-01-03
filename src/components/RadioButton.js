import React from 'react';


class RadioButton extends React.Component {

    state = {
        name:this.props.name,
        val:this.props.val,
        id:this.props.id,
        classes:this.props.classes,
        label:this.props.label,
        disabled:this.props.disabled,
        isSelected:this.props.isSelected,
        type:this.props.type
    }

    static getDerivedStateFromProps(props) {
        return {
            name: props.name,
            val: props.val,
            id: props.id,
            classes: props.classes,
            label: props.label,
            disabled: props.disabled,
            isSelected: props.isSelected,
            type: props.type
        }
    }

    componentDidMount(){
        if(this.state.type === "pressButton"){
            let radiosFamily = this.state.name;
            let inputInitialChecked = document.querySelector(`[name=${radiosFamily}][checked]`);
            let radioParent = inputInitialChecked.closest('.radio-button');
            radioParent.classList.add('active');
        }
    }

    componentDidUpdate(){
    }

    change = (e) =>{

        if(this.props.change){

            //for press buttons 
            if(this.state.type === "pressButton"){

            }

            //for all
            this.props.change(e);
        }
    }

    render(){
        return (
            <label htmlFor={this.state.id} className={`radio-button ${this.state.classes} ${this.state.isSelected ? "selected" : ""}`}>
                <span className="radio">
                    <input 
                        type={"radio"} 
                        id={this.state.id} 
                        name={this.state.name} 
                        value={this.state.val} 
                        onChange={(e) => this.change(e)}
                        disabled={this.state.disabled} 
                        checked={this.state.isSelected}
                    />
                    <span className="icon">
                        <svg id="radio-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                            <path className="check" d="M21,15a6,6,0,1,1-6-6A6,6,0,0,1,21,15Z"/>
                            <path className="ring" d="M15,5A10,10,0,1,1,5,15,10,10,0,0,1,15,5m0-3A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z"/>
                        </svg>
                    </span>
                    <span className="label">
                        {this.state.label}
                    </span>
                </span>
            </label>
        );
    }
}

RadioButton.defaultProps = {
    name: undefined,
    val: '',
    id: undefined,
    classes: '',
    label: '',
    disabled: false,
    checked: false
}

export default RadioButton;