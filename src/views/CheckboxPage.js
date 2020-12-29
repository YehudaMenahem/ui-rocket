import React from 'react';

//import components
import Checkbox from './../components/Checkbox';
import Tabs from './../components/Tabs';
import InputField from './../components/InputField';
import RadioButton from './../components/RadioButton';
import Icon from './../components/Icon';


class CheckboxPage extends React.Component{

    state = {
        tabs: ['Checkbox'],
        activeTab: 0,
        checkboxOptions: {
            firstOption: 'love',
            secondOption: 'liveAboard',
            thirdOption: 'happiness',
        },
        checkboxesState: {
            checkboxFirstOpt: true,
            checkboxSecondOpt: false,
            checkboxThirdOpt: true
        },
        checkboxesType: 'check'
    }

    changeCheckboxText = (val,index) => {
        let updateObj = {...this.state.checkboxOptions};
        let keyToUpdate = Object.keys(updateObj)[index];
        updateObj[keyToUpdate] = val;

        this.setState({
            checkboxOptions: updateObj
        })  
    }

    change = (eventTarget,key) => {
        let state = eventTarget.checked;
        let updateObj = {...this.state.checkboxesState}
        updateObj[key] = state;
        this.setState({
            checkboxesState: updateObj
        })
    }

    selectedCheckboxes(){
        var list = Object.assign(this.state.selectedDesires);
        let arr = [];
        let res;
        let i = 0;
        for (const key in list) {
            //identify which keys have true value
            if(`${list[key]}` === "true"){
                arr[i] = `${key}`;
                i++;
            };
        }

        //create a string of values separated by commas from keys
        res = arr.join();
        return res;
    }

    changeType = (type) =>{
        this.setState({
            checkboxesType: type
        })
    }

    renderCheckboxes(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){
            case 1:
                view = 
                    <div>
                        <span>New content is on the way...</span>
                    </div>
                break;

            default:
                view = 
                    <div className="row checkboxes">
                        <div className="col-1 align-start">
                            <ul className="vertical-list">
                                <li><Checkbox iconType={this.state.checkboxesType} label={this.state.checkboxOptions.firstOption} name={this.state.checkboxOptions.firstOption.toLowerCase()} id={this.state.checkboxOptions.firstOption.toLowerCase()} checked={this.state.checkboxesState.checkboxFirstOpt} change={(e) => this.change(e,'checkboxFirstOpt')} disabled={false} required={true} /></li>
                                <li><Checkbox iconType={this.state.checkboxesType} label={this.state.checkboxOptions.secondOption} name={this.state.checkboxOptions.secondOption.toLowerCase()} id={this.state.checkboxOptions.secondOption.toLowerCase()} checked={this.state.checkboxesState.checkboxSecondOpt} change={(e) => this.change(e,'checkboxSecondOpt')} disabled={false} required={true}/></li>
                                <li><Checkbox iconType={this.state.checkboxesType} label="Happiness" name="happiness" id="happiness" checked={this.state.checkboxesState.checkboxThirdOpt} change={(e) => this.change(e,'checkboxThirdOpt')} disabled={true} required={true}/></li>
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

    //copy code to clipboard
    copyCode = () =>{
        const textarea = this.textArea;
        textarea.select();
        document.execCommand('copy');
    }

    render(){
        return (
            <div className="ui container checkbox-page">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Checkbox</h1>
                        </div>
                        <div className="col-1">
                            <p>Checkbox allow user to mark an option / unmark it.</p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 mr-b-lr">
                            <h2>Demo</h2>
                        </div>
                        <div className="col-1">
                            <div className="container">   
                
                                <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e) => this.setActiveTab(e)} />
                
                                <div className="content grid">
                                    {this.renderCheckboxes()}
                                    <div className="settings pd-t-xl">
                                        <ul className="mr-b-xl"> 
                                            <li> 
                                                <InputField type="text" label={'First Checkbox'} value={this.state.checkboxOptions.firstOption} change={e => this.changeCheckboxText(e,0)} maxlength={15}></InputField>
                                            </li>
                                            <li className={"mr-b-lr"}> 
                                                <InputField type="text" label={'Second Checkbox'} value={this.state.checkboxOptions.secondOption} change={e => this.changeCheckboxText(e,1)} maxlength={15}></InputField>
                                            </li>
                                            <li> 
                                                <p className={"mr-b-md mr-l-lr"}>Shape type:</p>
                                                <div className={"press-buttons"}> 
                                                    <RadioButton pressButtons={true} name={"icon-sign"} label={"Check"} value={"check"} isSelected={this.state.checkboxesType === "check"} change={() => {this.changeType("check")}}></RadioButton>
                                                    <RadioButton pressButtons={true} name={"icon-sign"} label={"Star"} value={"stae"} isSelected={this.state.checkboxesType === "star"} change={() => {this.changeType("star")}}></RadioButton>
                                                    <RadioButton pressButtons={true} name={"icon-sign"} label={"Heart"} value={"heart"} isSelected={this.state.checkboxesType === "heart"} change={() => {this.changeType("heart")}}></RadioButton>
                                                </div>
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
                            <h2>Checkbox props options </h2>
                            <p><span className="bold prop">label:</span> The text that will be written aside the radio button | string</p>
                            <p><span className="bold prop">isChecked:</span> Set the radio button state - chosen ir not | boolean</p>
                            <p><span className="bold prop">name:</span> This value is for checkbox value for submit | string </p>
                            <p><span className="bold prop">id:</span> Special id for element cathing with js | string </p>
                            <p><span className="bold prop">theme:</span> Primary, Secondary, third. will color the radio circle in the theme colors | string (lowercase)</p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">change:</span> A function from parent that will occur when the radio button has been choosen | function </p>
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
<Checkbox
    label="option one - yes"
    checked={true}
    name="name-for-submit"
    id="id"
    theme="primary"
    classes="your-class"
    change={this.onChangeEvent}
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
                                        <span className="component">{'Checkbox'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'label='}<span className="props-value">{'"option one - yes"'}</span><br></br>
                                            &nbsp; {'checked='}<span className="element">{'{true}'}</span><br></br>
                                            &nbsp; {'name='}<span className="props-value">{'"name-for-submit"'}</span><br></br>
                                            &nbsp; {'id='}<span className="props-value">{'"id"'}</span><br></br>
                                            &nbsp; {'theme='}<span className="props-value">{'"primary"'}</span><br></br>
                                            &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span> <br></br>
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

export default CheckboxPage;