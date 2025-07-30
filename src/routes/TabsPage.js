import React from 'react';

//import components
import Tabs from './../components/Tabs';
import Icon from './../components/Icon';


class TabsPage extends React.Component{

    state = {
        tabs: ['First Tab','Second Tab','Third Tab'],
        activeTab: 0
    }

    setActiveTab(currentTabId){
        this.setState({
            activeTab: currentTabId,
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
            <div className="ui container tabs-page">
                <div className="grid">

                <div className="row section">
                    <div className="col-1">
                        <h1>Tabs</h1>
                    </div>
                    <div className="col-1">
                        <p>Tabs are used for displaying different views in the same content area.</p>
                    </div>
                </div>

                <div className="row section">
                    <div className="col-1 mr-b-xl">
                        <h2>Demo</h2>
                    </div>  

                    <div className="col-1">
                        <div className="container">   
                            <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e) => this.setActiveTab(e)}/>  
                        </div>
                    </div>
                </div>

                <div className="row section">
                    <div className="col-1 props-keys">
                        {/* props options */}
                        <h2>Component props</h2>
                        <p><span className="bold prop">tabs:</span> the names of the tabs | array </p>
                        <p><span className="bold prop">activeTabs:</span> the index number of the tabs(from the arrat) that should be active on load | number</p>
                        <p><span className="bold prop">classes:</span> custom classes that can be added to the component | string </p>
                        <p><span className="bold prop">id:</span> Special id for element cathing with js | string </p>
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
<Tabs
    tabs=["firstTab","secondTab","thirdTab"]
    activeTab=0
    theme="primary"
    classes="your-class"
    id="id" />
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
                                    <span className="component">{'Tabs'}</span><br></br>
                                    <span className="indent-code">
                                        &nbsp; {'tabs='}<span className="props-value">{'["Majestic Tab","Awesome Tab","Fierce Tab"]'}</span><br></br>
                                        &nbsp; {'activeTab='}<span className="props-value">{'0'}</span><br></br>
                                        &nbsp; {'classes='}<span className="props-value">{'"tabs"'}</span> <br></br>
                                        &nbsp; {'id='}<span className="props-value">{'"tabs"'}</span>
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

export default TabsPage;
