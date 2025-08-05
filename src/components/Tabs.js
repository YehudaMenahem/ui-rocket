import React from 'react';


//import components
import Button from './Button.js'

class Tabs extends React.Component{

    state = {
        tabs: this.props.tabs,
        activeTab: this.props.activeTab,
        classes: this.props.classes,
        id: this.props.id
    };

    static getDerivedStateFromProps(props) {
        return {
            tabs: props.tabs,
            activeTab: props.activeTab,
            classes: props.classes,
            id: props.id
        }
    }

    clickTab(index){
        this.setState({
            activeTab: index
        });
        this.props.setActiveTab(index);
    }

    render(){

        let self = this;

        return (
            <ul className={`tabs`} active-tab={this.state.activeTab}>
                {this.state.tabs.map(function(name,index){
                    return (
                        <li
                            key={index}
                            className={`tab` + (self.state.activeTab === index ? " active" : "")}
                            onClick={() => self.clickTab(index)}
                        >
                            <Button
                                styleBtn="text"
                                id={name.replace(" ","-").toLowerCase()}
                                label={name}
                                // click={e => e.preventDefault()}
                            ></Button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

Tabs.defaultProps = {
    tabs: [],
    activeTab: 0,
    classes: 'props.classes',
    id: undefined
}

export default Tabs;


