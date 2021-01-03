import React from 'react';

// Import components
import Icon from './../components/Icon';
import Tabs from './../components/Tabs'
import InputField from './../components/InputField'


class IconPage extends React.Component{

    state = {
        tabs: ['Icon','List Of Icons'],
        activeTab: 0,
        iconsList: [
            'file image',
            'question circle',
            'question circle outline',
            'thumbs up',
            'user circle',
            'angle up',
            'angle down',
            'arrow circle left',
            'balance scale',
            'chess knight',
            'chess queen',
            'chess king',
            'chess rock',
            'chess bishop',
            'chess pawn',
            'rocket',
            'window close',
            'address card',
            'mobile',
            'hand peace',
            'heart',
            'volleyball ball',
            'table tennis',
            'eye',
            'github',
            'jsfiddle',
            'sass',
            'spotify',
            'react',
            'youtube square'
        ],
        iconSettings: {
            iconClass: 'eye'
        }
    }

    renderView(){  
        let view;

        switch(Number.parseInt(this.state.activeTab)){
            case 0:
                view = 
                <div className="grid">
                    <div className="row">
                        <div className="col-1 mr-l-lr mr-b-xl">
                            <Icon iconClass={`${this.state.iconSettings.iconClass} icon-size-xl`} theme="primary"></Icon><span></span>
                        </div>
                    </div>
                </div>;
            break;

            default:
                view = 
                    <div className="icons-list-content full-width">
                        <div className="icons grid">
                            {this.state.iconsList.map((key,index) => {
                                return(
                                    <div key={index} className="grid-item">
                                        <div className="icon-pres">
                                            <Icon iconClass={`${key}`} />
                                        </div>
                                        <span className="icon-class f-xxs mr-t-md">{`${key}`}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="row mr-t-xl">
                            <div className="col-2 mobile-col-1">
                                <p>{`The Icon component uses icons from Semantic-ui library. For the whole library icons explore here`}:
                                    <span className="mr-l-lr">
                                        <Icon iconClass="linkify emphasis-color mr-l-lr"></Icon>
                                        <a href="https://semantic-ui.com/elements/icon.html" target="_blank" rel="noopener noreferrer" className="link emphasis emphasis-color">Semantic Ui</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                return view
        }

        return view;
    }

    setActiveTab(currentTabId){
        this.setState({
            activeTab: currentTabId
        })
    }

    changeIconClass(value){        
        this.setState({
             iconSettings: {
                 iconClass: value
             }
        });
    }

    //copy code to clipboard
    copyCode = () =>{
        const textarea = this.textArea;
        textarea.select();
        document.execCommand('copy');
    }

    render(){
        return (
            <div className="ui container icon-page">
                <div className="grid">
                    
                    <div className="row section">
                        <div className="col-1">
                            <h1>Icons</h1>
                        </div>
                        <div className="col-1">
                            <p> 
                                {`Icon is a simple component that used in order to replace a text in a visual known symbol,
                                grab attention and be placed next to text in order to add more value to simplicity of experience for the user.`}
                            </p>
                        </div>
                    </div>

                    <div className="row section">
                        <div className="col-1 mr-b-lr">
                            <h2>Demo</h2>
                        </div>
                        <div className="col-1">
                            <div className="container">   
                                <Tabs 
                                    tabs={this.state.tabs} 
                                    activeTab={this.state.activeTab} 
                                    setActiveTab={(e) => this.setActiveTab(e)}
                                />
                                <div className="content">
                                    {this.renderView()}
                                    <div className="settings pd-l-xl">
                                        <h3><Icon iconClass={'setting'}></Icon>Customization</h3>
                                        <ul className="mr-b-xl"> 
                                            <li> 
                                                <InputField type="text" label={'Icon Class/es'} value={this.state.iconSettings.iconClass} change={e => this.changeIconClass(e)} maxlength={20}></InputField>
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
                            <p><span className="bold prop">classes:</span> costum classes that can be added to the component | string </p>
                            <p><span className="bold prop">icon-class:</span> class from <a href="https://semantic-ui.com/elements/icon.html" target="_blank" rel="noopener noreferrer" className="link emphasis emphasis-color">ui-semantic</a> that 'create' the desired icon | string </p>
                            <p><span className="bold prop">theme:</span> Primary, Secondary, third | string (lowercase)</p>
                            <p><span className="bold prop">click:</span> A function from parent that will fired on click of the icon | arrow function </p>
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
<Icon
    theme="primary"
    classes="your-class"
    click={this.click} />
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
                                        <span className="component">{'Icon'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'classes='}<span className="props-value">{'"classic-class"'}</span> <br></br>
                                            &nbsp; {'icon-class='}<span className="props-value">{'"heart"'}</span> <br></br>
                                            &nbsp; {'theme='}<span className="props-value">{'"primary"'}</span><br></br>
                                            &nbsp; {'click='}<span className="element">{'{this.'}<span className="function">{'click'}</span>{'}'}</span>
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

export default IconPage;