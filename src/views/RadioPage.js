import React from 'react';

//import components
import RadioButton from '../components/RadioButton';
import Tabs from '../components/Tabs';
import InputField from '../components/InputField';
import Icon from '../components/Icon';


class RadioPage extends React.Component{

    state ={
        // selectedOption: 'Yes',
        // selectedPressOption: 'Volleyball',
        tabs: ['Radio','Press Buttons'],
        activeTab: 0,
        radioSettings: {
            firstOption: 'Yes',
            secondOption: 'No',
            thirdOption: 'Maybe',
        },
        radioSettingsCheck: {
            firstOptionChecked: true,
            secondOptionChecked: false,
            thirdOptionChecked: false
        },
        radioPressSettings: {
            firstOption: 'Volleyball',
            secondOption: 'Basketball',
            thirdOption: 'Soccer',
            fourthOption: 'Golf'
        },
        radioPressSettingsCheck: {
            firstOptionChecked: true,
            secondOptionChecked: false,
            thirdOptionChecked: false
        }
    }

    onChangeRadio(e,key,objectKey){
        let updateObj = {...this.state.radioSettingsCheck};
        for(const prop in updateObj){
            if(updateObj[prop] === true){
                updateObj[prop] = false
            }
        }
        updateObj[objectKey] = e.target.checked;
        this.setState({
            [key]: updateObj
        });
    }

    onChangeRadioPress = (e) => {
        this.setState({
            selectedPressOption: e.target.value
            
        }, () => {
            debugger;
        });
    }

    renderRadio(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){

            case 1:
                view =
                    <div className="grid mr-b-xl">
                        <div className="row">
                            <div className="col-7">
                                <div className="press-buttons">
                                    <RadioButton type="pressButton" classes="mr-b-md" name="press-button" val={this.state.radioPressSettings.firstOption.toLowerCase()} label={this.state.radioPressSettings.firstOption} id={this.state.radioPressSettings.firstOption.toLowerCase()} isSelected={this.state.radioPressSettingsCheck.firstOptionChecked} change={(e) => this.onChangeRadio(e,'radioPressSettingsCheck','firstOptionChecked')}/> 
                                    <RadioButton type="pressButton" classes="mr-b-md" name="press-button" val={this.state.radioPressSettings.secondOption.toLowerCase()} label={this.state.radioPressSettings.secondOption} id={this.state.radioPressSettings.secondOption.toLowerCase()} isSelected={this.state.radioPressSettingsCheck.secondOptionChecked} change={(e) => this.onChangeRadio(e,'radioPressSettingsCheck','secondOptionChecked')} /> 
                                    <RadioButton type="pressButton" classes="mr-b-md" name="press-button" val={this.state.radioPressSettings.thirdOption.toLowerCase()} label={this.state.radioPressSettings.thirdOption} id={this.state.radioPressSettings.thirdOption.toLowerCase()} isSelected={this.state.radioPressSettingsCheck.thirdOptionChecked} change={(e) => this.onChangeRadio(e,'radioPressSettingsCheck','thirdOptionChecked')} /> 
                                    <RadioButton type="pressButton" classes="mr-b-md" name="press-button" val={this.state.radioPressSettings.fourthOption.toLowerCase()} label={this.state.radioPressSettings.fourthOption} id={this.state.radioPressSettings.fourthOption.toLowerCase()} isSelected={this.state.radioPressSettingsCheck.fourthOptionChecked} change={(e) => this.onChangeRadio(e,'radioPressSettingsCheck','fourthOptionChecked')} /> 
                                </div>
                            </div>
                        </div>
                    </div>
                break;

            default:
                view =
                    <div className="grid mr-b-xl">
                        <div className="row">
                            <div className="col-7">
                                <div className="radio-buttons">
                                    <RadioButton classes="mr-b-md" name="radio" val={this.state.radioSettings.firstOption.toLowerCase()} label={this.state.radioSettings.firstOption} id={this.state.radioSettings.firstOption.toLowerCase()} isSelected={this.state.radioSettingsCheck.firstOptionChecked} change={(e) => this.onChangeRadio(e,'radioSettingsCheck','firstOptionChecked')}/> 
                                    <RadioButton classes="mr-b-md" name="radio" val={this.state.radioSettings.secondOption.toLowerCase()} label={this.state.radioSettings.secondOption} id={this.state.radioSettings.secondOption.toLowerCase()} isSelected={this.state.radioSettingsCheck.secondOptionChecked} change={(e) => this.onChangeRadio(e,'radioSettingsCheck','secondOptionChecked')} /> 
                                    <RadioButton classes="mr-b-md" name="radio" val={this.state.radioSettings.thirdOption.toLowerCase()} label={this.state.radioSettings.thirdOption} id={this.state.radioSettings.thirdOption.toLowerCase()} isSelected={this.state.radioSettingsCheck.thirdOptionChecked} change={(e) => this.onChangeRadio(e,'radioSettingsCheck','thirdOptionChecked')} /> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
        }

        return view;
    }

    setActiveTab(currentId){
        this.setState({
            activeTab: currentId
        })
    }

    changeRadioTextOption(val,index){
        let updateObj = {...this.state.radioSettings};
        let keyToUpdate = Object.keys(updateObj)[index];
        updateObj[keyToUpdate] = val;

        this.setState({
            radioSettings: updateObj
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
            <div className="ui container radio-page">

                <div className="grid">
                    
                    <div className="row section">
                        <div className="col-1">
                            <h1>Radio Buttons</h1>
                        </div>
                        <div className="col-1">
                            <p>Radio Buttons allow user to select only one option from number of choices. </p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 mr-b-lr">
                            <h2>Demo</h2>
                        </div>
                        <div className="col-1">
                            <div className="container">   
                                <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e) => this.setActiveTab(e)}/>
                                <div className="content">
                                    {this.renderRadio()}
                                    <div className="settings pd-t-xl">
                                        <ul className="mr-b-xl"> 
                                            <li> 
                                                <InputField type="text" label={'First Radio'} value={this.state.radioSettings.firstOption} change={e => this.changeRadioTextOption(e,0)} maxlength={15}></InputField>
                                            </li>
                                            <li> 
                                                <InputField type="text" label={'Second Radio'} value={this.state.radioSettings.secondOption} change={e => this.changeRadioTextOption(e,1)} maxlength={15}></InputField>
                                            </li>
                                            <li> 
                                                <InputField type="text" label={'Third Radio'} value={this.state.radioSettings.thirdOption} change={e => this.changeRadioTextOption(e,2)} maxlength={15}></InputField>
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
                            <h2>Radio Button props options </h2>
                            <p><span className="bold prop">label:</span> The text that will be written aside the radio button | string</p>
                            <p><span className="bold prop">checked:</span> Set the radio button state - chosen ir not | boolean</p>
                            <p><span className="bold prop">value:</span> The value that will be transfer as the user selection when click on this option | string </p>
                            <p><span className="bold prop">name:</span> This value is for all the radio buttons belongs to the same group | string </p>
                            <p><span className="bold prop">theme:</span> Primary, Secondary, third. will color the radio circle in the theme colors | string (lowercase)</p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">change:</span> A function from parent that will occur when the radio button has been choosen | function </p>
                            <p><span className="bold prop">disabled:</span> Option of disable the radio button | boolean</p>
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
<RadioButton
  label="option one - yes"
  checked={true}
  value="allow-cookies"
  theme="primary"
  classes="your-class"
  change={this.onChangeEvent}
  disabled={true} />
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
                                    <span className="component">{'RadioButton'}</span><br></br>
                                    <span className="indent-code">
                                        &nbsp; {'label='}<span className="props-value">{'"option one - yes"'}</span><br></br>
                                        &nbsp; {'checked='}<span className="element">{'{true}'}</span><br></br>
                                        &nbsp; {'value='}<span className="props-value">{'"allow-cookies"'}</span><br></br>
                                        &nbsp; {'theme='}<span className="props-value">{'"primary"'}</span><br></br>
                                        &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span> <br></br>
                                        &nbsp; {'change='}<span className="element">{'{this.'}<span className="function">{'onChangeEvent'}</span>{'}'}</span> <br></br>
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
};

export default RadioPage;