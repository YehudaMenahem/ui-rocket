import React from 'react';


class InputField extends React.Component{

    state = {
        label:this.props.label,
        type:this.props.type,
        id:this.props.id,
        classes:this.props.classes,
        name:this.props.name,
        min:this.props.min,
        max:this.props.max,
        minlength:this.props.minlength,
        maxlength:this.props.maxlength,
        pattern:this.props.pattern,
        autocomplete:this.props.autocomplete,
        required:this.props.required,
        disabled:this.props.disabled,
        placeholder:this.props.placeholder,
        error: '',
        note: this.props.note,
        value: this.props.value,
        showError: true,
        charIsUse: this.props.value ? this.props.value.length : 0
    }

    static getDerivedStateFromProps(props) {
        return {
            label: props.label,
            type: props.type,
            id: props.id,
            classes: props.classes,
            name: props.name,
            min: props.min,
            max: props.max,
            minlength: props.minlength,
            maxlength: props.maxlength,
            pattern: props.pattern,
            autocomplete: props.autocomplete,
            required: props.required,
            disabled: props.disabled,
            value: props.value,
            error: props.error,
            note: props.note,
            placeholder: props.placeholder,
            showError: props.showError,
            charIsUse: props.value ? props.value.length : 0
        }
    }

    onBlur = event =>{
        if(this.props.onBlur){
            this.props.onBlur(event.target)
        }
    }

    change = (e) =>{
        if(this.state.pattern){
            let pattern = new RegExp(this.state.pattern);
            if(!pattern.test(e.target.value)){
                return
            }
        }

        if(this.props.change){
            this.props.change(e.target.value)
        }
        
    }

    render(){ 

        return (
            <div className={`input-field ${this.state.placeholder ? "placeholder":""} ${this.state.value ? "with-value" : "" }`}>
                <label className={`field`}>
                    <input 
                        type={this.state.type} 
                        id={this.state.id}
                        classes={this.state.classes}
                        name={this.state.name} 
                        min={this.state.min}
                        max={this.state.max}
                        minLength={this.state.minlength}
                        maxLength={this.state.maxlength}
                        pattern={this.state.pattern}
                        required={this.state.required}
                        disabled={this.state.disabled} 
                        autoComplete={this.state.autocomplete}
                        placeholder={this.state.placeholder}
                        onBlur={this.onBlur}
                        value={this.state.value} 
                        onChange={this.change}
                        showerror={this.state.showError.toString()}
                    />
                    <span className="label">
                        {this.state.label}{(this.state.required) ? <span className="astrix">*</span> : null }
                        </span>
                </label>
                <div className="helpers">
                    {
                        (this.state.error && this.state.showError && this.state.required)
                        ?
                        <span className="error">{this.state.error}</span>
                        :
                        null
                    }
                    {
                        (this.state.note && !this.state.showError)
                        ?
                        <span className="note">{this.state.note}</span>
                        :
                        null
                    }
                    <span className="char-num">{this.state.charIsUse}/{this.state.maxlength}</span>
                </div>
            </div>
        );
    }
}

InputField.defaultProps = {
    label:'',
    type:'text',
    id:undefined,
    classes:'',
    name:'',
    min:undefined,
    max:undefined,
    minlength:undefined,
    maxlength:30,
    pattern:undefined,
    autocomplete:'off',
    required:false,
    disabled:false,
    placeholder:undefined,
    error:'This field is required',
    showError: false,
    note:undefined,
    value:undefined
}

export default InputField;