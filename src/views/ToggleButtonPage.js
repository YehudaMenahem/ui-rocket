import React from 'react';

//import components
import ToggleButton from './../components/ToggleButton'
import Tabs from './../components/Tabs'
import RadioButton from './../components/RadioButton'
import Icon from './../components/Icon'


class ToggleButtonPage extends React.Component{

    state = {
        toggleState: false,
        tabs: ['Toggle Btn'],
        activeTab: 0,
        toggleOptions: {
            labelPosition: 'label-from-left'
        }
    }

    onToggle = (checkedStatus) => {
        this.setState({
            toggleState: checkedStatus
        })
    }

    labelPosition = (e,side) =>{
        this.setState({
            toggleOptions: {
                labelPosition: side
            }
        })
        
    }

    renderToggleButtons(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){
            case 0:
                view = 
                <div className="row component mobile-mr-b-xl">
                    <div className="col-1">
                        <ToggleButton 
                            label={'Are you sure? (no pressure at all...)'} 
                            name="toggle" 
                            id="toggle"
                            checked={this.state.toggleState}
                            change={this.onToggle}
                            labelPosition={this.state.toggleOptions.labelPosition}
                        />
                    </div>
                </div>
                break;
            default:
                view = 
                <div className="row">
                    <div className="col-1">
                        <p>What do you mean no content yet???!!!</p>
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
        return(
            <div className="ui container toggle-button-page">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Toggle Button</h1>
                        </div>
                        <div className="col-1">
                            <p>Toggle button uses for the user to select between two states.</p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 mr-b-lr">
                            <h2>Demo</h2>
                        </div>
                        <div className="col-1">
                            <div className="container">   
                                <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e) => this.setActiveTab(e)} />
                                    <div className="content">
                                        <div className="grid">

                                            {this.renderToggleButtons()}
                                            <div className="settings pd-l-xl mobile-pd-t-xl">
                                                <ul className="mr-b-xl"> 
                                                    <li className="mr-b-md"><span>Label Position:</span></li>
                                                    <li> 
                                                        <ul className="horizontal-list">
                                                            <li>
                                                                <RadioButton name={"label-position"} label={"From left"} id={"from-left"} isSelected={this.state.toggleOptions.labelPosition==='label-from-left'} change={(e) => this.labelPosition(e,'label-from-left')}></RadioButton>
                                                            </li> 
                                                            <li>
                                                                <RadioButton name={"label-position"} label={"From Right"} id={"from-right"} isSelected={this.state.toggleOptions.labelPosition==='label-from-right'} change={(e) => this.labelPosition(e,'label-from-right')}></RadioButton>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            
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
                            <p><span className="bold prop">name:</span> This value is for form submit purpse | string </p>
                            <p><span className="bold prop">theme:</span> Primary, Secondary, third. will color the radio circle in the theme colors | string (lowercase)</p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">id:</span> Special id for element cathing with js | string </p>
                            <p><span className="bold prop">isChecked:</span> Set the radio button state - chosen ir not | boolean</p>
                            <p><span className="bold prop">change:</span> A function from parent that will occur when the radio button has been choosen | function </p>
                            <p><span className="bold prop">disabled:</span> Option of disable the Textbox | boolean</p>
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
<ToggleButton
    label="User Name"
    isChecked={true}
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
                                        <span className="component">{'ToggleButton'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'label='}<span className="props-value">{'"User Name"'}</span><br></br>
                                            &nbsp; {'isChecked='}<span className="element">{'{true}'}</span><br></br>
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

export default ToggleButtonPage;