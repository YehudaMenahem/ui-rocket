import React from 'react';

//import components
import Textbox from './../components/Textbox';
import Tabs from './../components/Tabs';
import InputField from './../components/InputField';
import ToggleButton from './../components/ToggleButton';
import Icon from './../components/Icon';

class TextboxPage extends React.Component{

    state = {
        tabs:['Textbox'],
        activeTab:0,
        textboxSettings: {
            label: 'Comments',
            note: 'you can write more than one comment',
            showError: false,
            value: ''
        }
    }

    //copy code to clipboard
    copyCode = () =>{
        const textarea = this.textArea;
        textarea.select();
        document.execCommand('copy');
    }          



    renderView(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){
            case 1:
                view = 
                <div className="row">
                    <div className="col-3">
                        <p>Not going to render</p>
                    </div>
                </div>
            break;

            default:
                view =
                <div className="grid">
                    <div className="row">
                        <div className="col-3 component mobile-col-1 mobile-mr-b-xl">
                            <Textbox 
                                label={this.state.textboxSettings.label} 
                                id="textush" 
                                name="textush" 
                                classes={"textarea"}
                                rows="5" 
                                cols="40" 
                                maxlength="100" 
                                required={true} 
                                disabled={false}
                                note={this.state.textboxSettings.note}
                                showError={this.state.textboxSettings.showError} 
                                error={'error for user'} 
                                />
                        </div>
                    </div>
                </div>
        }

        return view;
    }

    setActiveTab(currentTab){
        this.setState({
            activeTab: currentTab
        })
    }

    //controllers for textbox
    changeTextboxLabel(value,keyIndex){
        let updateObj = {...this.state.textboxSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            textboxSettings: updateObj
        });
    }

    changeTextboxNote(value,keyIndex){
        let updateObj = {...this.state.textboxSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            textboxSettings: updateObj
        });
    }

    changeTextboxError(value,keyIndex){
        let updateObj = {...this.state.textboxSettings};
        let keyToUpdate = Object.keys(updateObj)[keyIndex];
        updateObj[keyToUpdate] = value;

        this.setState({
            textboxSettings: updateObj
        });
    }

    render(){
        return (
            <div className="ui container textbox-page">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Textbox</h1>
                        </div>
                        <div className="col-1">
                            <p className={"line-break"}>
                                {`Textbox defines a multi-line text input area which allows the user 
                                to insert long text like in uses of comments or reviews. `}  
                            </p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 mr-b-xl">
                            <h2>Demo</h2>
                        </div>
                        <div className="col-1">
                            <div className="container">   
                                <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e)=>this.setActiveTab(e)} />
                                <div className="content">
                                    {this.renderView()}
                                    <div className="settings pd-l-xl mobile-pd-t-xl">
                                        <h3><Icon iconClass={'setting'}></Icon>Customization</h3>
                                        <ul className="mr-b-xl"> 
                                            <li> 
                                                <InputField type="text" label={'Label for field'} value={this.state.textboxSettings.label} change={e => this.changeTextboxLabel(e,0)} maxlength={15}></InputField>
                                            </li>
                                            <li> 
                                                <InputField type="text" label={'Note for field'} value={this.state.textboxSettings.note} change={e => this.changeTextboxNote(e,1)} maxlength={25}></InputField>
                                            </li>
                                            <li> 
                                                <ToggleButton label={'Show error'} name={'text-field-error'} id={'textFieldError'} checked={this.state.textboxSettings.showError} change={e => this.changeTextboxError(e,2)} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 props-keys">
                            {/* props options */}
                            <h2>Component props</h2>
                            <p><span className="bold prop">label:</span> The text that will be written aside the Textbox | string</p>
                            <p><span className="bold prop">id:</span> Special id for element cathing with js | string </p>
                            <p><span className="bold prop">name:</span> This value is for form submit purpse | string </p>
                            <p><span className="bold prop">rows:</span> Set the number of visual rows of the Textbox | number / string </p>
                            <p><span className="bold prop">cols:</span> Set the number of visual cols of the Textbox | number / string </p>
                            <p><span className="bold prop">maxlength:</span> Set the maximum characters that user can insert | number / string </p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">placeholder: </span> A placeholder that will shown as default value in input. | string </p>
                            <p><span className="bold prop">error:</span> The error message that appears when there is an error | string </p>
                            <p><span className="bold prop">note:</span> The note that that appears to give a direction for user| string </p>                            
                            <p><span className="bold prop">showError: </span> Determine if the error message will appear  | boolean </p>
                            <p><span className="bold prop">required:</span> Option of required for form validation | boolean</p>
                            <p><span className="bold prop">disabled:</span> Option of disable the Textbox | boolean</p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col">
                            {/*how to use*/}
                            <h2>How to use</h2>
                            <div className="code-wrapper">
                            <textarea
                                className={'snippet'}
                                ref={(textarea) => this.textArea = textarea}
                                value={`
<Textbox
    label="User Name"
    theme="primary"
    classes="your-class"
    cols="5"
    rows="10"
    maxlength="650"
    id="id"
    name="name-for-submit"
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
                                        
                                        <span className="component">{'Textbox'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'label='}<span className="props-value">{'"Notes for self future"'}</span><br></br>
                                            &nbsp; {'id='}<span className="props-value">{'"notes"'}</span><br></br>
                                            &nbsp; {'name='}<span className="props-value">{'"notes"'}</span><br></br>
                                            &nbsp; {'rows='}<span className="props-value">{'"10"'}</span><br></br>
                                            &nbsp; {'cols='}<span className="props-value">{'"5"'}</span><br></br>
                                            &nbsp; {'maxlength='}<span className="props-value">{'"650"'}</span><br></br>
                                            &nbsp; {'classes='}<span className="props-value">{'"emphasize"'}</span> <br></br>
                                            &nbsp; {'placeholder='}<span className="props-value">{'"Marty, whatever happens, dont go back to 2020"'}</span><br></br>
                                            &nbsp; {'error='}<span className="props-value">{'"oh man...just fill it already"'}</span><br></br>
                                            &nbsp; {'note='}<span className="props-value">{'"you! make a different"'}</span><br></br>
                                            &nbsp; {'showError='}<span className="props-value">{'{false}'}</span>
                                            &nbsp; {'required='}<span className="element">{'{true}'}</span>
                                            &nbsp; {'disabled='}<span className="element">{'{true}'}</span>
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

export default TextboxPage;