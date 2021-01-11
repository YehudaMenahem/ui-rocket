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

    clickTab(e){
        let elem = e.target;
        
        //in case of clicking the li tag
        if(elem.tagName.toLowerCase() === "li"){
            elem = elem.querySelector('span');
        }
        
        let button = elem.closest('button'); //getting to the button tag and not the span label
        let li = button.parentElement; //button parent
        let ul = li.parentElement; //holds all the button parent which we need to remove active class from
        let index = button.getAttribute('index');
        
        //remove li active class
        ul.childNodes.forEach(function(elem){
            if(elem.classList.contains('active')){
                elem.classList.remove('active')
            }
        })

        li.classList.add('active');

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
                        <li key={index} className={`tab` + (self.state.activeTab === index ? " active" : "")} onClick={(e)=>self.clickTab(e)}>
                            <Button 
                                styleBtn="text" 
                                id={name.replace(" ","-").toLowerCase()} 
                                index={index} 
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


