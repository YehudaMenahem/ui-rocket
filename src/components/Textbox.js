import React from 'react';


class Textbox extends React.Component  {

    state = {
        label:this.props.label,
        id:this.props.id,
        name:this.props.name,
        rows:this.props.rows,
        cols:this.props.cols,
        maxlength:this.props.maxlength,
        classes:this.props.classes,
        required:this.props.required,
        placeholder:this.props.placeholder,
        disabled:this.props.disabled,
        error:this.props.error,
        note:this.props.note,
        showError:this.props.showError,
        onChange:this.props.change
    }

    static getDerivedStateFromProps(props) {
        return {
            label: props.label,
            id: props.id,
            name: props.name,
            rows: props.rows,
            cols: props.cols,
            maxlength: props.maxlength,
            classes: props.classes,
            required: props.required,
            placeholder: props.placeholder,
            disabled: props.disabled,
            error: props.error,
            note: props.note,
            showError: props.showError,
            onChange: props.change
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
            <div className={`textbox ${this.state.placeholder ? "placeholder":""} ${this.state.value ? "with-value" : "" }`}>
                <label className={`field`}>
                    <textarea 
                        name={this.state.name}
                        rows={this.state.rows} 
                        cols={this.state.cols} 
                        placeholder={this.state.placeholder} 
                        maxLength={this.state.maxlength}
                        className={this.state.classes}
                        required={this.state.required} 
                        disabled={this.state.disabled}
                        id={this.state.id} 
                        error={this.state.error}
                        onChange={this.change}
                    />
                    <span className="label">{this.state.label}{(this.state.required) ? <span className="astrix">*</span> : null }</span>
                </label>
                <div className="helpers">
                    {
                        (this.state.error && this.state.showError)
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
                    <span className="char-num">0/{this.state.maxlength ? this.state.maxlength : 135}</span>

                </div>
            </div>
        );
    }
}

Textbox.defaultProps = {
    label:"",
    rows:1,
    cols:"100%",
    required:false,
    placeholder:null,
    disabled:false,
    maxlength: 135,
    note:undefined,
    id:undefined,
    name:'',
    classes:'',
    error: 'This is a required field'
}

export default Textbox;