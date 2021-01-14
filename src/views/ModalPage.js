import React from 'react';
import { connect } from 'react-redux';
import { setModal } from './../actions';

//import components
import Button from './../components/Button';
import Tabs from './../components/Tabs';
import Icon from './../components/Icon';



class ModalPage extends React.Component{

    state = {
        modalStatus: false,
        showModal: this.props.showModal,
        tabs: ['Modal'],
        activeTab: 0
        //getting from redux - toggleModal function (as prop)
        //getting from redux - showModal prop
    }

    openModal = (e) =>{
        // debugger;
        this.props.setModal({
            showModal:true,
            headerTitle:'Forgot your password?',
            contentTitle:'Forgot Password?',
            contentRunningText:`Don't worry, it happens. 
            We will send you a reminder right away.`
        });
    }

    static getDerivedStateFromProps(props) {
        return {
            modalStatus:props.modalStatus,
            showModal:props.showModal
        }
    }

    renderView(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){

            default: 
                view =
                <div className="row">
                    <div className="col-1 mobile-col-1">
                        <Button
                            size="medium"
                            label="Open Modal"
                            click={(e)=>this.openModal(e)}
                        />
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
            <div className="ui container">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Modal</h1>
                        </div>
                        <div className="col-1">
                            <p>
                                Modal is a box/popup window that displays on top of the current page.     
                            </p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1">
                            <h2>Demo</h2>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1">
                            <div className="container">   
                                <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e)=>this.setActiveTab(e)} />
                                <div className="content">
                                    <div className="grid">
                                        {this.renderView()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 props-keys">
                            {/* props options */}
                            <h2>Component props</h2>
                            <p><span className="bold prop">modalTitle:</span> The header title of the modal | string</p>
                            <p><span className="bold prop">heroImage:</span> Makes the modal header with hero image | string (of the src)</p>
                            <p><span className="bold prop">closeButton:</span> An option to create a modal without close option | boolean </p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
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
<Modal
    headerTitle="Modal Title"
    closeButton={false}
    theme="primary"
    classes="your-class" >
        <Input type="text"/>
        <Button label="Yes, Lets do it"></Button>
</Modal>
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
                                        <span className="component">{'Modal'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'modalTitle='}<span className="props-value">{'"Welcome"'}</span><br></br>
                                            &nbsp; {'heroImage='}<span className="props-value">{'"http://www.bobsponge.com"'}</span><br></br>
                                            &nbsp; {'closeButton='}<span className="props-value">{'{true}'}</span><br></br>
                                            &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span>
                                            <span  className="brackets">{" >"}</span><br></br>
                                        </span>
                                    </span>

                                    {/* children */}
                                    &nbsp; <span className="brackets">{"<"}</span>
                                            <span className=""><span className="component">{'Input'} </span><span className="props">{'type='}</span><span className="props-value">{'"text"'}</span></span>
                                            <span className="brackets">{"/>"}</span><br></br>
                                    &nbsp; <span className="brackets">{"<"}</span>
                                            <span className=""><span className="component">{'Button'} </span><span className="props">{'label='}</span><span className="props-value">{'"Yes, Lets do it"'}</span></span>
                                            <span className="brackets">{">"}</span>
                                            <span className="brackets">{"</"}</span>
                                            <span className=""><span className="component">{'Button'}</span></span><span className="brackets">{">"}</span><br></br>

                                    {/* Form closing tag */}
                                    <span className="brackets">{"</"}</span>
                                    <span className="component">{'Modal'}</span>
                                    <span className="brackets">{">"}</span>
                                </code>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return { modalSettings: state.modalSettings }
}

export default connect(mapStateToProps, {setModal})(ModalPage);