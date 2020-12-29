import React from 'react';

//import components
import InputField from './../components/InputField';
import Tabs from './../components/Tabs';
import ToggleButton from './../components/ToggleButton';
import Icon from './../components/Icon';


class InputFieldPage extends React.Component{

    state = {
        id: 200060515,
        email: "",
        password: "",
        tel: "",
        tabs:["Input Text","Input Number","Input Email","Input Password","Input Tel"],
        activeTab:0,
        textFieldSettings:{
            label: "Name",
            note: "Maybe nickname...",
            showError: false,
            value: 'Supersonic'
        },
        numberFieldSettings:{
            label: "ID number",
            note: "Sir, ID please",
            showError: false,
            value: '200060515'
        },
        emailFieldSettings:{
            label: "elctronic mail",
            note: "???@???.???",
            showError: false,
            value: 'gmail@jmail.com'
        },
        passwordFieldSettings:{
            label: "password",
            note: "???@???.???",
            showError: false,
            value: ''
        },
        telFieldSettings:{
            label: "Phone",
            note: "only digits, no hyphen",
            showError: false,
            value: ''
        }
    }

    //text field
    onChangeInputText = (value,keyIndex) =>{
        let updateObj = {...this.state.textFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;
        this.setState({
            textFieldSettings: updateObj
       });
    }

    //number field
    onChangeInputNumber = (value,keyIndex) =>{
        let updateObj = {...this.state.numberFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            numberFieldSettings: updateObj
       });
    }

    //email field
    onChangeInputEmail = (value,keyIndex) =>{
        let updateObj = {...this.state.emailFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            emailFieldSettings: updateObj
       });
    }

    //password field
    onChangeInputPassword = (value,keyIndex) =>{         
        let updateObj = {...this.state.passwordFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            passwordFieldSettings: updateObj
       });
    }

    //tel field
    onChangeInputTel = (value,keyIndex) =>{         
        let updateObj = {...this.state.telFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            telFieldSettings: updateObj
       });
    }

    renderInputs(){
        let view;
        
        switch(Number.parseInt(this.state.activeTab)){
            case 1:
                view = 
                <div className="grid">
                    <div className="row">
                        <div className="col-4 tablet-col-1 mobile-col-1">
                            <div>
                                <InputField type="number" min="5" max="20" label={this.state.numberFieldSettings.label} alt="ID" id="postal-code-id" name="postal-code" value={this.state.numberFieldSettings.value} change={(e) => this.onChangeInputNumber(e,3)}/>
                            </div>
                        </div>
                        <div className="col-5 tablet-col-1 mobile-col-1 mr-l-auto">
                            <div className="settings pd-l-xl">
                                <ul className="mr-b-xl"> 
                                    <li> 
                                        <InputField type="text" label={'Label for field'} value={this.state.numberFieldSettings.label} change={e => this.changeNumberFieldLabel(e,0)} maxlength={15}></InputField>
                                    </li>
                                    <li> 
                                        <InputField type="text" label={'Note for field'} value={this.state.numberFieldSettings.note} change={e => this.changeNumberFieldNote(e,1)} maxlength={25}></InputField>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                break;

            case 2:
                view = 
                <div className="grid">
                    <div className="row">
                        <div className="col-4 tablet-col-1 mobile-col-1">
                            <div>
                                <InputField type="email" label={this.state.emailFieldSettings.label} alt="Email" id="mail-id" name="mail" placeholder="Like: judale@kofim.co.il" value={this.state.emailFieldSettings.value} change={(e) => this.onChangeInputEmail(e,3)}/>
                            </div>
                        </div>
                        <div className="col-5 tablet-col-1 mobile-col-1 mr-l-auto">
                                <div className="settings pd-l-xl">
                                    <ul className="mr-b-xl"> 
                                        <li> 
                                            <InputField type="text" label={'Label for field'} value={this.state.emailFieldSettings.label} change={e => this.changeEmailFieldLabel(e,0)} maxlength={15}></InputField>
                                        </li>
                                        <li> 
                                            <InputField type="text" label={'Note for field'} value={this.state.emailFieldSettings.note} change={e => this.changeEmailFieldNote(e,1)} maxlength={25}></InputField>
                                        </li>
                                        <li> 
                                            <ToggleButton label={'Show error'} name={'text-field-error'} id={'textFieldError'} checked={this.state.emailFieldSettings.showError} change={e => this.changeEmailFieldError(e,2)} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
                break;

            case 3:
                view = 
                <div className="grid">
                    <div className="row">
                        <div className="col-4 tablet-col-1 mobile-col-1">
                            <div>
                                <InputField type="password" note={this.state.passwordFieldSettings.note} label={this.state.passwordFieldSettings.label} alt="Password" value={this.state.passwordFieldSettings.value} d="pass-id" name="pass" change ={(e) => this.onChangeInputPassword(e,3)}/>
                            </div>
                        </div>
                        <div className="col-5 tablet-col-1 mobile-col-1 mr-l-auto">
                            <div className="settings pd-l-xl">
                                <ul className="mr-b-xl"> 
                                    <li> 
                                        <InputField type="text" label={'Label for field'} value={this.state.passwordFieldSettings.label} change={e => this.changePasswordFieldLabel(e,0)} maxlength={15}></InputField>
                                    </li>
                                    <li> 
                                        <InputField type="text" label={'Note for field'} value={this.state.passwordFieldSettings.note} change={e => this.changePasswordFieldNote(e,1)} maxlength={25}></InputField>
                                    </li>
                                    <li> 
                                        <ToggleButton label={'Show error'} name={'text-field-error'} id={'textFieldError'} checked={this.state.passwordFieldSettings.showError} change={e => this.changePasswordFieldError(e,2)} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                break;

            case 4:
                view = 
                <div className="grid">
                    <div className="row">
                        <div className="col-4 tablet-col-1 mobile-col-1">
                            <div>
                                <InputField type="tel" pattern={"[0-9]"} label={this.state.telFieldSettings.label} value={this.state.telFieldSettings.value} note={this.state.telFieldSettings.note} showError={this.state.telFieldSettings.showError} alt="Tel" id="tel-id" name="tel" placeholder="0545XXXXXX" change={(e) => this.onChangeInputTel(e,3)}/>
                            </div>
                        </div>
                        <div className="col-5 tablet-col-1 mobile-col-1 mr-l-auto">
                            <div className="settings pd-l-xl">
                                <ul className="mr-b-xl"> 
                                    <li> 
                                        <InputField type="text" label={'Label for field'} value={this.state.telFieldSettings.label} change={e => this.changeTelFieldLabel(e,0)} maxlength={15}></InputField>
                                    </li>
                                    <li> 
                                        <InputField type="text" label={'Note for field'} value={this.state.telFieldSettings.note} change={e => this.changeTelFieldNote(e,1)} maxlength={25}></InputField>
                                    </li>
                                    <li> 
                                        <ToggleButton label={'Show error'} name={'tel-field-error'} id={'telFieldError'} checked={this.state.telFieldSettings.showError} change={e => this.changeTelFieldError(e,2)} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                break;

            default:
                view =
                    <div className="grid">
                        <div className="row">
                            <div className="col-4 tablet-col-1 mobile-col-1">
                                <div>
                                    <InputField type="text" pattern="[A-Za-z0-9]+" showError={this.state.textFieldSettings.showError} error={'error for user'} note={this.state.textFieldSettings.note} minlength="2" maxlength="15" label={this.state.textFieldSettings.label} alt="Label" auto="on" id="name-id" name="name" required={true} placeholder="John" value={this.state.textFieldSettings.value} change={(e) => this.onChangeInputText(e,3)}/> <br></br>
                                </div>
                            </div>
                            <div className="col-5 tablet-col-1 mobile-col-1 mr-l-auto">
                                <div className="settings pd-l-xl">
                                    <ul className="mr-b-xl"> 
                                        <li> 
                                            <InputField type="text" label={'Label for field'} value={this.state.textFieldSettings.label} change={e => this.changeTextFieldLabel(e,0)} maxlength={15}></InputField>
                                        </li>
                                        <li> 
                                            <InputField type="text" label={'Note for field'} value={this.state.textFieldSettings.note} change={e => this.changeTextFieldNote(e,1)} maxlength={25}></InputField>
                                        </li>
                                        <li> 
                                            <ToggleButton label={'Show error'} name={'text-field-error'} id={'textFieldError'} checked={this.state.textFieldSettings.showError} change={e => this.changeTextFieldError(e,2)} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                
        }

        return view;
    }

    setActiveTab(currentTabId){
        this.setState({
            activeTab: currentTabId
        })
    }

    //controllers for fields - text
    changeTextFieldLabel(value,keyIndex){
        let updateObj = {...this.state.textFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            textFieldSettings: updateObj
       });
    }

    changeTextFieldNote(value,keyIndex){
        let updateObj = {...this.state.textFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            textFieldSettings: updateObj
       });
    }

    changeTextFieldError(checkState,keyIndex){
        let updateObj = {...this.state.textFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = checkState;

        this.setState({
            textFieldSettings: updateObj
       });
    }

    //controllers for fields - number
    changeNumberFieldLabel(value,keyIndex){
        let updateObj = {...this.state.numberFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            numberFieldSettings: updateObj
       });
    }

    changeNumberFieldNote(value,keyIndex){
        let updateObj = {...this.state.numberFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            numberFieldSettings: updateObj
        });
    }

    //controllers for fields - email
    changeEmailFieldLabel(value,keyIndex){
        let updateObj = {...this.state.emailFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            emailFieldSettings: updateObj
        });
    }

    changeEmailFieldNote(value,keyIndex){
        let updateObj = {...this.state.emailFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            emailFieldSettings: updateObj
        });
    }

    //controllers for fields - password
    changePasswordFieldLabel(value,keyIndex){
        let updateObj = {...this.state.passwordFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            passwordFieldSettings: updateObj
        });
    }

    changePasswordFieldNote(value,keyIndex){
        let updateObj = {...this.state.passwordFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            passwordFieldSettings: updateObj
        });
    }

    //controllers for fields - tel
    changeTelFieldLabel(value,keyIndex){
        let updateObj = {...this.state.telFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            telFieldSettings: updateObj
        });
    }

    changeTelFieldNote(value,keyIndex){
        let updateObj = {...this.state.telFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            telFieldSettings: updateObj
        });
    }

    changeTelFieldError(value,keyIndex){
        let updateObj = {...this.state.telFieldSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            telFieldSettings: updateObj
        });
    }

    //copy code to clipboard
    copyCode = () =>{
        const textarea = this.textArea;
        textarea.select();
        document.execCommand('copy');
    }

    render(){
        return (
            <div className="ui container input-field-page">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Inputs Fields</h1>
                        </div>
                        <div className="col-1">
                            <p className={"line-break"}>
                                {`Inputs Fields allow user to enter data which the application can stored, 
                                play functions according to it and react base on that data. `}
                            </p>                        
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 mr-b-xl">
                            <h2>Demo</h2>
                        </div>

                        <div className="col-1">
                            <div className="container">   
                                <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e) => this.setActiveTab(e)}/>
                                <div className="content">
                                    {this.renderInputs()}
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className="row section">
                        <div className="col-1 props-keys">             
                
                            {/* props options */}
                            <h2>Input Fields props options </h2>
                            <p><span className="bold prop">label: </span>The text that will be written aside the Input field | string</p>
                            <p><span className="bold prop">type: </span>Options of input types - Text, Number, Email, Password, Telephone | string</p>
                            <p><span className="bold prop">theme: </span>Primary, Secondary, third. will color the radio circle in the theme colors | string (lowercase)</p>
                            <p><span className="bold prop">classes: </span>costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">id: </span>Special id for element cathing with js | string </p>
                            <p><span className="bold prop">alt: </span>Altrnative text in some case the element doesn't load to page | string </p>
                            <p><span className="bold prop">name: </span>This value is for all the radio buttons belongs to the same group | string </p>
                            <p><span className="bold prop">min: </span>for input with numbers type. set the minimum value for the user input | number / string</p>
                            <p><span className="bold prop">max: </span>for input with numbers type. set the maximum value for the user input | number / string</p>
                            <p><span className="bold prop">minlength: </span>for input with characters type. set the minimum characters for the user input validation | number / string</p>
                            <p><span className="bold prop">maxlength: </span>for input with characters type. limit the maximum characters for the user input | number / string</p>
                            <p><span className="bold prop">pattern: </span>a regex that determine specific input pattern that the user can enter | string </p>
                            <p><span className="bold prop">autocomplete: </span>an option to use the brow sectionser memory for old values that the user put. default set is without | "on" / "off" </p>
                            <p><span className="bold prop">placeholder: </span>a placeholder that will shown as default value in input. | string </p>
                            <p><span className="bold prop">blur (focusout): </span>A function from parent that will occur when the user blur from the input | function </p>
                            <p><span className="bold prop">disabled: </span>Option of disable the radio button | boolean</p>
                            <p><span className="bold prop">required: </span>Option of required for form validation | boolean</p>                        
                        </div>
                    </div>
                
                    <div className="row section">
                        <div className="col-1">   

                            {/*how to use*/}
                            <h2>How to use</h2>
                            <div className="code-wrapper">
                            <textarea
                                    className={'snippet'}
                                    ref={(textarea) => this.textArea = textarea}
                                    value={`
<InputField
    label="User Name"
    type="text"
    theme="primary"
    classes="your-class"
    id="id"
    alt="user name field"
    name="name-for-submit"
    min="0"
    max="100"
    minlength="0"
    maxlength="20"
    pattern="[A-Za-z0-9]+"
    autocomplete="yes"
    placeholder="John Doe"
    blur={this.onBlurEvent}
    disabled={true}
    required={true} />
                                    `}
                                    readOnly={true}
                                />
                                <div className={"circle"}>
                                    <Icon iconClass={'copy'} click={this.copyCode}></Icon>
                                    <span className="tooltiptext">copy code to clipboard</span>
                                </div>
                                <code>
                                    <span className="brackets">{"<"}</span>
                                    <span className="props">
                                        <span className="component">{'InputField'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'label='}<span className="props-value">{'"User Name"'}</span><br></br>
                                            &nbsp; {'type='}<span className="props-value">{'"text"'}</span><br></br>
                                            &nbsp; {'theme='}<span className="props-value">{'"primary"'}</span><br></br>
                                            &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span> <br></br>
                                            &nbsp; {'id='}<span className="props-value">{'"id"'}</span><br></br>
                                            &nbsp; {'alt='}<span className="props-value">{'"user name field"'}</span><br></br>
                                            &nbsp; {'name='}<span className="props-value">{'"name-for-submit"'}</span><br></br>
                                            &nbsp; {'min='}<span className="props-value">{'"0"'}</span><br></br>
                                            &nbsp; {'max='}<span className="props-value">{'"100"'}</span><br></br>
                                            &nbsp; {'minlength='}<span className="props-value">{'"0"'}</span><br></br>
                                            &nbsp; {'maxlength='}<span className="props-value">{'"20"'}</span><br></br>
                                            &nbsp; {'pattern='}<span className="props-value">{'"[A-Za-z0-9]+"'}</span><br></br>
                                            &nbsp; {'autocomplete='}<span className="props-value">{'"yes"'}</span><br></br>
                                            &nbsp; {'placeholder='}<span className="props-value">{'"John Doe"'}</span><br></br>
                                            &nbsp; {'blur='}<span className="element">{'{this.'}<span className="function">{'onBlurEvent'}</span>{'}'}</span> <br></br>
                                            &nbsp; {'disabled='}<span className="element">{'{true}'}</span><br></br>
                                            &nbsp; {'required='}<span className="element">{'{true}'}</span>
                                            <span  className="brackets">{" />"}</span><br></br>
                                        </span>
                                    </span>
                                </code>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default InputFieldPage;