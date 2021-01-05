import React from 'react';
import emailjs from 'emailjs-com';

//import components
import Form from './../components/Form';
import InputField from '../components/InputField';
import Textbox from '../components/Textbox';
import SelectField from '../components/SelectField';
import RadioButton from '../components/RadioButton';
import Tabs from '../components/Tabs';
import ToggleButton from '../components/ToggleButton'
import Button from '../components/Button'
import Icon from '../components/Icon'

class FormPage extends React.Component{

    state = {
        dataToSubmit: null,
        selectedOption:"good",
        selectedDesires: {
            agreementApproval: true
        },
        selectCompOptions: ['Progress Bar Component','Autocomplete Component','Ajax Service'],
        tabs:['Form'],
        activeTab: 0,
        objToSubmit: "",
        inputVal: "",
        inputShowError: false,
        textboxVal: "",
        textboxShowError: false,
        visualReview: false,
        functionalReview: false,
        submitButtonState: false,
        submitButtonTitle: "Send",
        submitSuccess: false,
    }

    onFormSubmit = (res) =>{
        this.setState({
            dataToSubmit: `${res}`
        });

        this.setState({
            submitButtonState: true
        })

        emailjs.send('service_ol1t4z1', 'template_1i6l42v', res, 'user_vJBWBaWsuQprgYyiu5YqI')
        .then((result) => {
            setTimeout(() => {
                this.setState({
                    submitButtonState: false
                })
            }, 700);
            this.setState({
                submitButtonTitle: "Thanks - you're awesome!!",
                submitSuccess: true
            })
        }, (error) => {
            console.log(error.text);
        }); 

    };

    onChangeRadio = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    change = (eventTarget) => {
        this.setState({
            selectedDesires: {
                agreementApproval: eventTarget.checked
            }
        })
    }

    onToggle = (checkedStatus,toggleState) => {
        this.setState({
            [toggleState]: checkedStatus
        })
    }

    changeInput(value){        
        this.setState({
             inputVal: value,
        });

        if(value.replace(/\s/g, '') === ''){
            this.setState({
                inputShowError: true
            });
        } else {
            this.setState({
                inputShowError: false
            });
        }
    }

    changeTextBox(value){
        this.setState({
            textboxVal: value,
       });

       if(value.replace(/\s/g, '') === ''){
           this.setState({
               textboxShowError: true
           });
       } else {
           this.setState({
               textboxShowError: false
           });
       }
    }

    renderView(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){
            case 1:
                view =
                <div className="row">
                    <div className="col-3">
                        <p>Coming from out of space</p>
                    </div>
                </div>
            break;

            default:
                view =
                <div className="row">
                    <div className="col-3">
                        <div>
                            <Form submit={this.onFormSubmit} id="myForm" label="Form:" data={this.state.dataToSubmit} classes="mr-b-xl form" title={"Penny For Your Thoughts"} novalidate={true}>
                                <p className={"form-child"}>Hi <span role="img" aria-label="hey sign">🙋🏻‍♂️</span> <br></br>
                                    and welcome to UI-ROCKET <span role="img" aria-label="missle">🚀</span>my react project, I hope you're enjoying it <span role="img" aria-label="happy face">🙃</span> <br></br>
                                    Would like to know what's your opinion about it <span role="img" aria-label="thinking face">🤔</span>, any comments, missing features
                                    or components, compliments, suggestions
                                    for improvement or whatever crosses your mind <span role="img" aria-label="light bulb">💡</span> <br></br><br></br> 
                                    Keep rocking, <br></br> 
                                    Thank you, Juda <span role="img" aria-label="hope sign">🙏🏼</span>
                                    <br></br> 
                                    <br></br> 
                                </p>
                                <div className={"form-child"}>
                                    <InputField label="Name or nickname" type="text" name="name" change={(e) => {this.changeInput(e)}} value={this.state.inputVal} showError={this.state.inputShowError}></InputField>
                                </div>
                                <ToggleButton 
                                    label={'I like the visual side of the project'} 
                                    name="visual-review" 
                                    id="visualReview"
                                    checked={this.state.visualReview}
                                    change={(e) => this.onToggle(e,"visualReview")}
                                    classes="form-child"
                                    labelPosition="label-from-right"
                                />
                                <ToggleButton 
                                    label={'I like the functional side of the project'} 
                                    name="functional-review" 
                                    id="functionalReview"
                                    checked={this.state.functionalReview}
                                    change={(e) => this.onToggle(e,"functionalReview")}
                                    classes="form-child"
                                    labelPosition="label-from-right"
                                />
                                <SelectField label="I think you should add..." options={this.state.selectCompOptions} id="missing-components" name="missing-components" disabled={false} required={true} change={this.change} className={"form-child"}/> <br></br>
                                <h5 className={"press-btn-label"}>I think that overall the project is:</h5>
                                <div className="mobile-col-1 press-buttons form-child">
                                    <RadioButton type={"pressButtons"} name="rating" val="aweful" label="Aweful" id="aweful" isSelected={this.state.selectedOption === "aweful"} change={this.onChangeRadio}/> 
                                    <RadioButton type={"pressButtons"} name="rating" val="meh" label="Meh..." id="meh" isSelected={this.state.selectedOption === "meh"} change={this.onChangeRadio} /> 
                                    <RadioButton type={"pressButtons"} name="rating" val="good" label="Good" id="good" isSelected={this.state.selectedOption === "good"} change={this.onChangeRadio} /> 
                                    <RadioButton type={"pressButtons"} name="rating" val="great" label="Great" id="great" isSelected={this.state.selectedOption === "great"} change={this.onChangeRadio} /> 
                                </div>
                                <div className={"form-child textbox"}>
                                    <Textbox label="Comments" rows="10" name="comments" id="textboxos" value={this.state.textboxVal} required={true} showError={this.state.textboxShowError} change={(e) => this.changeTextBox(e)}></Textbox>
                                </div>
                                <div className={"btn-wrapper"}>
                                    <Button type="submit" styleBtn="solid" label={this.state.submitButtonTitle} classes={`full-width ${this.state.submitSuccess ? "success" : ""}`} loading={this.state.submitButtonState}></Button>
                                </div>
                            
                            </Form>               
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

    //copy code to clipboard
    copyCode = () =>{
        const textarea = this.textArea;
        textarea.select();
        document.execCommand('copy');
    }

    render(){
        return (
            <div className="ui container form-page">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Form</h1>
                        </div>
                        <div className="col-1">
                            <p>Form used to collect the user inputs and info that prompted.</p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 mr-b-xl">
                            <h2>Demo</h2>
                        </div>
                        <div className="col-1 mr-b-xl">
                            <div className="container">   
                                <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e)=>this.setActiveTab(e)} />
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
                            <p><span className="bold prop">title:</span> The title of the form | string</p>
                            <p><span className="bold prop">id:</span> Special id for element cathing with js | string </p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">onSubmit:</span> A function from parent that will occur when the form submit | function </p>
                            <p><span className="bold prop">novalidate:</span> Determine if the form will be validate | boolean </p>
                            <p><span className="bold prop">error:</span> A general error in case of an invalid field value | string </p>
                        </div>
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
<Form
    title="Form super-form"
    id="id"
    theme="primary"
    classes="your-class"
    onSubmit={this.onSubmitEvent} >
    
    <Input type="text"/>
    <Input type="number"/>
</Form>
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
                                    <span className="component">{'Form'}</span><br></br>
                                    <span className="indent-code">
                                        &nbsp; {'title='}<span className="props-value">{'"We want to hear from you"'}</span><br></br>
                                        &nbsp; {'id='}<span className="props-value">{'"form"'}</span><br></br>
                                        &nbsp; {'classes='}<span className="props-value">{'"unformal"'}</span> <br></br>
                                        &nbsp; {'onSubmit='}<span className="element">{'{this.'}<span className="function">{'onSubmitEvent'}</span>{'}'}</span> <br></br>
                                        &nbsp; {'novalidate='}<span className="props-value">{'"false"'}</span> <br></br>
                                        &nbsp; {'error='}<span className="props-value">{'"so close...name field needs a fix"'}</span>

                                        <span  className="brackets">{" >"}</span><br></br>
                                    </span>
                                </span>

                                {/* children */}
                                &nbsp; <span className="brackets">{"<"}</span>
                                        <span className="">
                                            <span className="component">{'Input'} </span>
                                        <span className="props">{'type='}</span>
                                        <span className="props-value">{'"text"'}</span>
                                        </span>
                                        <span className="brackets">{"/>"}</span><br></br>
                                &nbsp; <span className="brackets">{"<"}</span>
                                        <span className="">
                                            <span className="component">{'Input'} </span>
                                            <span className="props">{'type='}</span>
                                            <span className="props-value">{'"number"'}</span>
                                        </span>
                                        <span className="brackets">{"/>"}</span><br></br>

                                {/* Form closing tag */}
                                <span className="brackets">{"</"}</span>
                                <span className="component">{'Form'}</span>
                                <span className="brackets">{">"}</span>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormPage;