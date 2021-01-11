import React from 'react';

//import components
import Tabs from './../components/Tabs';
import Button from './../components/Button';
import Icon from './../components/Icon';


class ToasterPage extends React.Component{
    state = {
        tabs: ['toaster'],
        activeTab: 0,
        toasterStatus: false,
        showToaster: this.props.showToaster,
    }

    //functions
    static getDerivedStateFromProps(props) {
        return {
            toasterStatus:props.toasterStatus,
            showToaster:props.showToaster
        }
    }

    openToaster = (fromOpener) =>{
        this.props.showToaster(fromOpener)
    }

    setActiveTab(currentTab){
        this.setState({
            activeTab: currentTab
        })
    }

    //render view function
    renderView = () =>{
        return (
            <Button 
                label={'make me a toast'} 
                click={(e) => {this.openToaster(true)}}
            />
        )
    }

    //copy code to clipboard
    copyCode = () =>{
        const textarea = this.textArea;
        textarea.select();
        document.execCommand('copy');
    }          

    //view
    render(){
        return (
            <div className="ui container toaster-page">
                <div className="grid">

                    <div className="row section">
                        <div className="col-1">
                            <h1>Toaster</h1>
                        </div>
                        <div className="col-1">
                            <p className={"line-break"}>
                                {`Toaster is a popup the used to show a message at the one of the 
                                corners of the screen.`}   
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 props-keys">
                            {/* props options */}
                            <h2>Component props </h2>
                            <p><span className="bold prop">type:</span> The type of the toaster notice - success,error,info,warning | string</p>
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">id:</span> Special id for element cathing with js | string </p>
                            <p><span className="bold prop">position:</span> The corner which in it the toaster will pop | string</p>
                            <p><span className="bold prop">title:</span> The title of the toaster | string</p>
                            <p><span className="bold prop">runningText:</span> the subtitle / runing text of the message for user | string </p>
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
<Toaster
    type="success"
    title="Congrats"
    position="top-right"
    runningText="So happy to have you here"
    show=false
    classes="your-class"
    id="awesome-toast" />
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
                                        <span className="component">{'Toaster'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'type='}<span className="props-value">{'"success"'}</span><br></br>
                                            &nbsp; {'classes='}<span className="props-value">{'"toast"'}</span> <br></br>
                                            &nbsp; {'id='}<span className="props-value">{'"french-toast"'}</span>
                                            &nbsp; {'position='}<span className="props-value">{'"top-right"'}</span><br></br>
                                            &nbsp; {'title='}<span className="props-value">{'"Bon Apetit"'}</span><br></br>
                                            &nbsp; {'runningText='}<span className="props-value">{'"Can I bring anything else?"'}</span>
                                            <span  className="brackets">{" />"}</span><br></br>
                                        </span>
                                    </span>
                                </code>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ToasterPage;