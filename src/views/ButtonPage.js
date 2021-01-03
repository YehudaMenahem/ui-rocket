import React from 'react';

// Import components
import Button from './../components/Button';
import Icon from './../components/Icon';
import Tabs from './../components/Tabs';
import InputField from './../components/InputField';
import RadioButton from './../components/RadioButton';
import Checkbox from './../components/Checkbox';
import ToggleButton from './../components/ToggleButton';
import SelectField from './../components/SelectField';

class ButtonPage extends React.Component{
    
    state = {
        title:'Clickush', 
        errMessage:null, 
        images:[], 
        imageList:null,
        currentTab:'solidButtonTab',
        tabs:['Btn','Back To Top Btn'],
        activeTab:0,
        loading: false,
        buttonSize: 'small',
        buttonIcon: false,
        buttonStyle: 'solid',
        buttonDisable: false,
        buttonLabel: 'Le buoton',
        buttonBackToTopPosition: undefined,
        buttonBackToTopOptions: ['default','bottom-right','bottom-center','bottom-left']
    }

    codeRef = React.createRef();

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMessage: err.message})
        );
        this.setState({title:'clickof'});
    }

    onclick = async (valTest) => {
        alert('Pound the alarm')
    }

    loadingState(){
        let loading = this.state.loading;
        this.setState({
            loading: !loading
        })
    }

    renderView(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){
            case 1:
            view = 
            <React.Fragment>
                <div className="grid">
                    <div className="row mr-b-xl">
                        <div className="col-1 mobile-col-1 btn-backTop">
                            <Button 
                                label={'Rocket To Top'} 
                                styleBtn="solid" 
                                size={this.state.buttonSize} 
                                scrollToTop={true}
                                position={this.state.buttonBackToTopPosition}
                                />
                        </div>
                    </div>
                </div>
                <div className="settings pd-l-xl">
                    <h3><Icon iconClass={'setting'}></Icon>Customization</h3>
                    <ul className="mr-b-xl"> 
                        <li> 
                            <SelectField label={"button position"} options={this.state.buttonBackToTopOptions} id={"button-positions"} name={"button-positions"} change={(e) => this.changeButtonPosition(e)}></SelectField>
                        </li>
                    </ul>
                </div> 
            </React.Fragment>
            break;

            default:
            view = 
            <React.Fragment>
                <div className="grid">
                    <div className="row mr-b-xl">

                        <div className="col-1 btn">
                            <Button 
                                styleBtn={this.state.buttonStyle}
                                size={this.state.buttonSize}
                                label={this.state.buttonLabel} 
                                theme="primary" 
                                classes="specific-cssclass"
                                disabled={this.state.buttonDisable}
                                loading={this.state.loading}
                                >
                                {
                                    (this.state.buttonIcon)
                                    ?
                                    <Icon iconClass="user"/>
                                    :
                                    ""
                                }
                            </Button>
                        </div>

                    </div>
                </div>  
                <div className="settings pd-l-xl" style={{minWidth:'250px'}}>
                    <h3><Icon iconClass={'setting'}></Icon>Customization</h3>
                    <ul className="mr-b-xl"> 
                        <li> 
                            <InputField type="text" label={'Button Label'} value={this.state.buttonLabel} change={e => this.changeInput(e)} maxlength={15}></InputField>
                        </li>
                    </ul>
                    <ul className="mr-b-lr horizontal-list"> <span className={"mr-r-sm"}>Size:</span>
                        <li><RadioButton name='size' val="small" label="small" id="small" isSelected={this.state.buttonSize === 'small'} change={(e) => this.changeSize('small')}/></li>
                        <li><RadioButton name='size' val="medium" label="medium" id="medium" isSelected={this.state.buttonSize === 'medium'} change={(e) => this.changeSize('medium')}/></li>
                        <li><RadioButton name='size' val="large" label="large" id="large" isSelected={this.state.buttonSize === 'large'} change={(e) => this.changeSize('large')}/></li>
                    </ul>
                    <ul className="mr-b-xl horizontal-list"> <span className={"mr-r-sm"}>Type:</span>
                        <li><RadioButton name='button-type' val="solid" label="solid" id="solid" isSelected={this.state.buttonStyle === 'solid'} change={(e) => this.changeType('solid')}/></li>
                        <li><RadioButton name='button-type' val="ghost" label="ghost" id="ghost" isSelected={this.state.buttonStyle === 'ghost'} change={(e) => this.changeType('ghost')}/></li>
                        <li><RadioButton name='button-type' val="text" label="text" id="text" isSelected={this.state.buttonStyle === 'text'} change={(e) => this.changeType('text')}/></li>

                    </ul>
                    <ul className="mr-b-lr"> 
                        <li>
                            <Checkbox label='Add Icon' name="add-icon" id="addIcon" checked={this.state.buttonIcon} change={(e) => this.showIconMode()}/>
                        </li>
                    </ul>
                    
                    <ul className="mr-b-xl"> 
                        <li>
                            <Checkbox label='Disabled Mode' name="disabled-mode" id="disabledMode" checked={this.state.buttonDisable} change={(e) => this.disabledButton()}/>
                        </li>
                    </ul>
                    <ul className="mr-b-xl"> 
                        <li><ToggleButton label="Loading state" name="Loading" id="Loading" checked={this.state.loading} change={(e) => this.loadingState()}/></li>
                    </ul>
                </div>   
            </React.Fragment>
        }

        return view;
    }

    setActiveTab(currentTabId){
        this.setState({
            activeTab: currentTabId
        })
    }

    //set button size
    setSize(size){
        this.setState({
            buttonSize: size
        })
    }

    showLoading = () =>{
        let loading = this.state.loading;
        this.setState({
            loading: !loading
        })
    }

    showIconMode = () =>{
        let buttonIcon = this.state.buttonIcon;

        this.setState({
            buttonIcon: !buttonIcon
        })
    }

    changeType = (style) =>{
        this.setState({
            buttonStyle: style
        })
    }

    disabledButton = () =>{
        let buttonDisable = this.state.buttonDisable;

        this.setState({
            buttonDisable: !buttonDisable
        })
    }

    changeInput(value){        
        this.setState({
             buttonLabel: value
        });
    }

    changeSize(size){
        this.setState({
            buttonSize: size
        })
    }

    //back to top button settings
    changeButtonPosition = (val) =>{
        this.setState({
            buttonBackToTopPosition: val
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
            <div className="ui container button-page">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Buttons</h1>
                        </div>
                        <br></br>
                        <div className="col-1">
                            <p>Buttons allow users to take action with a single tap.</p>
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
                                    {this.renderView()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 props-keys">
                            {/* props options */}
                            <h2>Component props</h2>
                            <p><span className="bold prop">label:</span> The text that will be written inside the button | string</p>
                            <p><span className="bold prop">styleBtn:</span> One of three types of button: solid / ghost / text | string </p>
                            <p><span className="bold prop">size:</span> Determine btn size - Small / Medium / Large | string (lowercase)</p>
                            <p><span className="bold prop">click:</span> A function from parent that will fired on click of the button | function </p>
                            <p><span className="bold prop">loading:</span> An option to show to user that a process that needs to be done is happening in the background | boolean</p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">theme:</span> Primary / Secondary / third | string (lowercase)</p>
                            <p><span className="bold prop">id: </span>Special id for element cathing with js | string </p>
                            <p><span className="bold prop">rounded:</span> Rounded button angles - done</p>
                            <p><span className="bold prop">shadow:</span> Adding shadow to button | boolean</p>
                            <p><span className="bold prop">disabled:</span> Option of disable the button | boolean</p>
                            <p><span className="bold prop">scrollToTop:</span> Makes specific functionality of the btn - bring user to top of the page  | boolean</p>
                            <p><span className="bold prop">position:</span> Only in the scrollToTop true option, can be use to position the btn - bottom-left / bottom-center / bottom-right | string</p>
                        </div>
                    </div>

                    <div className="row section">
                        {/*how to use*/}
                        <div className="col-1 mr-b-xl">
                            <h2>How to use</h2>
                        </div>
                        <div className="col-1">
                            <div className="code-wrapper">
                                <textarea
                                    className={'snippet'}
                                    ref={(textarea) => this.textArea = textarea}
                                    value={`
<Button
    type="solid"
    label="My Button"
    theme="primary"
    classes="your-class"
    click={this.onclick}
    disabled={true}
    loading={false} >
    <Icon classes="icon-class"/>
</Button>
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
                                        <span className="component">{'Button'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'label='}<span className="props-value">{'"2021 Button"'}</span><br></br>
                                            &nbsp; {'styleBtn='}<span className="props-value">{'"ghost"'}</span><br></br>
                                            &nbsp; {'size='}<span className="props-value">{'"medium"'}</span><br></br>
                                            &nbsp; {'click='}<span className="element">{'{this.'}<span className="function">{'onclick'}</span>{'}'}</span> <br></br>
                                            &nbsp; {'loading='}<span className="element">{'{false}'} </span>
                                            &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span> <br></br>
                                            &nbsp; {'theme='}<span className="props-value">{'"primary"'}</span><br></br>
                                            &nbsp; {'id='}<span className="props-value">{'"new-year"'}</span><br></br>
                                            &nbsp; {'rounded='}<span className="props-value">{'3px'}</span><br></br>
                                            &nbsp; {'shadow='}<span className="props-value">{'{true}'}</span><br></br>
                                            &nbsp; {'disabled='}<span className="element">{'{true}'}</span><br></br>
                                            &nbsp; {'scrollToTop='}<span className="element">{'{true}'}</span><br></br>
                                            &nbsp; {'position='}<span className="element">{'"bottom-center"'}</span>
                                            <span  className="brackets">{">"}</span><br></br>
                                        </span>
                                    </span>
                                    
                                    {/* children */}
                                    &nbsp; <span className="brackets">{"<"}</span>
                                            <span>
                                                <span className="component">{'Icon'} </span>
                                                <span className="props">{'classes='}</span><span className="props-value">{'"eye"'}</span></span>
                                            <span className="brackets">{"/>"}</span><br></br>

                                    {/* Button closing tag */}
                                    <span className="brackets">{"</"}</span>
                                    <span className="component">{'Button'}</span>
                                    <span className="brackets">{">"}</span>
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
};

export default ButtonPage;

