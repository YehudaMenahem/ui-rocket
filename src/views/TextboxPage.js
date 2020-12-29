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
                            <h2>Select Fields props options </h2>
                            <p><span className="bold prop">label:</span> The text that will be written aside the Textbox | string</p>
                            <p><span className="bold prop">theme:</span> Primary, Secondary, third. will color the radio circle in the theme colors | string (lowercase)</p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">cols:</span> Set the number of visual cols of the Textbox | number / string </p>
                            <p><span className="bold prop">rows:</span> Set the number of visual rows of the Textbox | number / string </p>
                            <p><span className="bold prop">maxlength:</span> Set the maximum characters that user can insert | number / string </p>
                            <p><span className="bold prop">id:</span> Special id for element cathing with js | string </p>
                            <p><span className="bold prop">name:</span> This value is for form submit purpse | string </p>
                            <p><span className="bold prop">disabled:</span> Option of disable the Textbox | boolean</p>
                            <p><span className="bold prop">required:</span> Option of required for form validation | boolean</p>
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
                                            &nbsp; {'label='}<span className="props-value">{'"User Name"'}</span><br></br>
                                            &nbsp; {'theme='}<span className="props-value">{'"primary"'}</span><br></br>
                                            &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span> <br></br>
                                            &nbsp; {'cols='}<span className="props-value">{'"5"'}</span><br></br>
                                            &nbsp; {'rows='}<span className="props-value">{'"10"'}</span><br></br>
                                            &nbsp; {'maxlength='}<span className="props-value">{'"650"'}</span><br></br>
                                            &nbsp; {'id='}<span className="props-value">{'"id"'}</span><br></br>
                                            &nbsp; {'name='}<span className="props-value">{'"name-for-submit"'}</span><br></br>
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

export default TextboxPage;