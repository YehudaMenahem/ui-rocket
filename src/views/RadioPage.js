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
        tabs: ['Radio','Press Btns'],
        activeTab: 1,
        radioSettings: {
            firstOption: 'Pizza by Philippe',
            secondOption: 'Beyond burger by Goodness',
            thirdOption: 'Amsterdam Full Inclusive by Ams Cookies',
        },
        radioSettingsCheck: {
            firstOptionChecked: false,
            secondOptionChecked: true,
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
            thirdOptionChecked: false,
            fourthOptionChecked: false
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
            
        });
    }

    renderRadio(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){

            case 1:
                view =
                    <div className="grid mr-b-xl with-press-buttons">
                        <div className="row">
                            <div className="col-7">
                                <h4>{'Favorite sport in summer:'}</h4>
                                <div className="press-buttons">
                                    <RadioButton classes="mr-b-md" name="press-button" val={this.state.radioPressSettings.firstOption.toLowerCase()} label={this.state.radioPressSettings.firstOption} id={this.state.radioPressSettings.firstOption.toLowerCase()} isSelected={this.state.radioPressSettingsCheck.firstOptionChecked} change={(e) => this.onChangeRadio(e,'radioPressSettingsCheck','firstOptionChecked')}/> 
                                    <RadioButton classes="mr-b-md" name="press-button" val={this.state.radioPressSettings.secondOption.toLowerCase()} label={this.state.radioPressSettings.secondOption} id={this.state.radioPressSettings.secondOption.toLowerCase()} isSelected={this.state.radioPressSettingsCheck.secondOptionChecked} change={(e) => this.onChangeRadio(e,'radioPressSettingsCheck','secondOptionChecked')} /> 
                                    <RadioButton classes="mr-b-md" name="press-button" val={this.state.radioPressSettings.thirdOption.toLowerCase()} label={this.state.radioPressSettings.thirdOption} id={this.state.radioPressSettings.thirdOption.toLowerCase()} isSelected={this.state.radioPressSettingsCheck.thirdOptionChecked} change={(e) => this.onChangeRadio(e,'radioPressSettingsCheck','thirdOptionChecked')} /> 
                                    <RadioButton classes="mr-b-md" name="press-button" val={this.state.radioPressSettings.fourthOption.toLowerCase()} label={this.state.radioPressSettings.fourthOption} id={this.state.radioPressSettings.fourthOption.toLowerCase()} isSelected={this.state.radioPressSettingsCheck.fourthOptionChecked} change={(e) => this.onChangeRadio(e,'radioPressSettingsCheck','fourthOptionChecked')} /> 
                                </div>
                            </div>
                        </div>
                    </div>
                break;

            default:
                view =
                    <div className="grid mr-b-xl">
                        <div className="row">
                            <div className="col-1">
                                <h4>{'Prefered Wolt order:'}</h4>
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
                                        <h3><Icon iconClass={'setting'}></Icon>Customization</h3>
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
                            <h2>Component props </h2>
                            <p><span className="bold prop">label:</span> The text that will be written aside the radio button | string</p>
                            <p><span className="bold prop">name:</span> This value is for all the radio buttons belongs to the same group | string </p>
                            <p><span className="bold prop">val:</span> The value that will be transfer as the user selection when click on this option | string </p>
                            <p><span className="bold prop">id: </span>Special id for element cathing with js | string </p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">disabled:</span> Option of disable the button | boolean</p>
                            <p><span className="bold prop">isSelected:</span> Set the radio button state - chosen ir not | boolean</p>
                            <p><span className="bold prop">type:</span> Determine if the type of button will look as press button - pressButton | string </p>
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
                                        &nbsp; {'label='}<span className="props-value">{'"Radio goo goo"'}</span><br></br>
                                        &nbsp; {'isSelected='}<span className="element">{'{true}'}</span><br></br>
                                        &nbsp; {'name='}<span className="props-value">{'"queen-songs"'}</span><br></br>
                                        &nbsp; {'val='}<span className="props-value">{'"allow-cookies"'}</span><br></br>
                                        &nbsp; {'id='}<span className="props-value">{'"new-year"'}</span><br></br>
                                        &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span> <br></br>
                                        &nbsp; {'disabled='}<span className="element">{'{true}'}</span><br></br>
                                        &nbsp; {'type='}<span className="element">{'"pressButton"'}</span>
                                        <span  className="brackets">{" />"}</span>
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