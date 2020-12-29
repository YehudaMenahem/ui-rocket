import React from 'react';

//import components
import SelectField from './../components/SelectField';
import Tabs from './../components/Tabs';
import InputField from './../components/InputField';
import Icon from './../components/Icon';


class SelectFieldPage extends React.Component {

    state = {
        userselection: "",
        tabs:['Select Field'],
        activeTab: 0,
        selectCompOptions: ['Audi','Austin','Mercedes'],
        selectSettingsOptions: `Audi, Austin, Mercedes`        
    }

    renderSelectFields(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){
            case 1:
                view = 
                <div className="grid">
                    <div className="row full-width">
                        <div className="col-4">
                            <SelectField label="Multi" id="cars-multiple" disabled={false} multiple={true} options={this.state.selectCompOptions}/>
                        </div>  
                    </div>
                </div>
                
            break;    
            case 2:
                view =
                <p>Pound the Alarm!!</p>
            break;
            default: //0
                view =
                <div className="grid">
                    <div className="component row full-width">
                        <div className="col-3 tablet-col-1">
                            <SelectField label="Label" id="cars" name="cars" disabled={false} required={true} change={this.change} options={this.state.selectCompOptions}/> <br></br>
                        </div>
                    </div>
                    <div className="settings pd-t-xl">
                        <ul className="mr-b-xl"> 
                            <li> 
                                <InputField type="text" pattern={'^[a-zA-Z0-9, ]*$'} label={'Select Options'} value={this.state.selectSettingsOptions} change={e => this.changeSelectOptions(e)} maxlength={50}></InputField>
                            </li>
                        </ul>
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

    change = (elem) =>{
        this.setState({
            userselection: `${elem.value}`
        })
    }

    changeSelectOptions = (value) =>{
        let userInput = value;
        let userInputNoSpaces = userInput.replace(/\s+/g, '');
        userInputNoSpaces = (userInputNoSpaces.charAt(userInputNoSpaces.length-1) === ',') ? userInputNoSpaces.slice(0,-1) : userInputNoSpaces;
        let updatedArray = userInputNoSpaces.split(',');
        updatedArray.unshift('Choose an option');

        this.setState({
            selectCompOptions: updatedArray,
            selectSettingsOptions: userInput
        })
    }

    //copy code to clipboard
    copyCode = () =>{
        const textarea = this.textArea;
        textarea.select();
        document.execCommand('copy');
    }

    render(){
        return (
            <div className="ui container select-page">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Select Field</h1>
                        </div>
                        <div className="col-1">
                            <p>Select field is a dropdown list which the user can choose her choice from.</p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 mr-b-xl">
                            <h2>Demo</h2>
                        </div>

                        <div className="col-1">
                            <div className="container">   
                                <Tabs tabs={this.state.tabs} activeTab={this.activeTab} setActiveTab={(e)=>this.setActiveTab(e)} />

                                <div className="content">
                                    {this.renderSelectFields()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 props-keys">

                            {/* props options */}
                            <h2>Select Fields props options </h2>
                            <p><span className="bold prop">label:</span> The text that will be written aside the Input field | string</p>
                            <p><span className="bold prop">theme:</span> Primary, Secondary, third. will color the radio circle in the theme colors | string (lowercase)</p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">id:</span> Special id for element cathing with js | string </p>
                            <p><span className="bold prop">name:</span> This value is for all the radio buttons belongs to the same group | string </p>
                            <p><span className="bold prop">disabled:</span> Option of disable the radio button | boolean</p>
                            <p><span className="bold prop">required:</span> Option of required for form validation | boolean</p>
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
<Img
    src="imageSrc"
    alt="User Avatar"
    classes="your-class"
    width="200px"
    height="auto"
    click={this.onClickEvent} />
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
                                        <span className="component">{'SelectField'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'label='}<span className="props-value">{'"User Name"'}</span><br></br>
                                            &nbsp; {'theme='}<span className="props-value">{'"primary"'}</span><br></br>
                                            &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span> <br></br>
                                            &nbsp; {'id='}<span className="props-value">{'"id"'}</span><br></br>
                                            &nbsp; {'name='}<span className="props-value">{'"name-for-submit"'}</span><br></br>
                                            &nbsp; {'change='}<span className="element">{'{this.'}<span className="function">{'onChangeEvent'}</span>{'}'}</span> <br></br>
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

export default SelectFieldPage;