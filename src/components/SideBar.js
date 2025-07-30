import React from 'react';
import { Link } from 'react-router-dom';

//import components
import Icon from './Icon.js'


class SideBar extends React.Component{

    state = {
        closeBar: this.props.closeBar
    }

    tabsList = React.createRef();
    
    static getDerivedStateFromProps(props){
        return {
            closeBar: props.closeBar
        }
    }

    componentDidMount = () => {
        let tabsList = this.tabsList.current.children;
        let currentLocation = window.location.href;
        let i = 0;
        for(i; i<tabsList.length;i++){
            if(tabsList[i].tagName === "LI"){
                let tab = tabsList[i].firstElementChild;
                let tabLocation = tab.href;
                if(currentLocation === tabLocation){
                    tabsList[i].classList.add('active');
                } else {
                    tabsList[i].classList.remove('active');
                }
            }
        }
    }

    changeRoute = (e) =>{
        let allTabs = document.querySelectorAll('.components-list .item');
        //remove class from the tab that we're moving from
        allTabs.forEach(function(elem){
            elem.classList.remove('active');
        })
        //add class for mark the current route tab
        let currentTab = e.target.parentElement;
        currentTab.classList.add('active');
        this.props.closeSideBar();
    }

    render(){
        return (
            <div className={`side-bar ${this.state.closeBar ? 'close' : 'open'}`}>
                <Link to="/" onClick={(e) => this.changeRoute(e)}>
                    <div className="side-bar-header">
                        <h3 className={"title"}><Icon classes={"mr-r-md"} iconClass={"rocket"}></Icon>Rocket UI</h3>
                    </div>
                </Link>
                <ul className="components-list" ref={this.tabsList}>
                    <li className="item active"><Link to="/" onClick={(e) => this.changeRoute(e)}>Entrance</Link></li>
                    <hr className={"separator-vertical"}></hr>
                    <li className="item"><Link to="/ButtonPage" onClick={(e) => this.changeRoute(e)}>Button</Link></li>
                    <li className="item"><Link to="/IconPage" onClick={(e) => this.changeRoute(e)}>Icon</Link></li>
                    <li className="item"><Link to="/RadioPage" onClick={(e) => this.changeRoute(e)}>Radio Button</Link></li>
                    <li className="item"><Link to="/CheckboxPage" onClick={(e) => this.changeRoute(e)}>Checkbox</Link></li>
                    <li className="item"><Link to="/ToggleButtonPage" onClick={(e) => this.changeRoute(e)}>Toggle Button</Link></li>
                    <li className="item"><Link to="/InputFieldPage" onClick={(e) => this.changeRoute(e)}>Input</Link></li>
                    <li className="item"><Link to="/SelectFieldPage" onClick={(e) => this.changeRoute(e)}>Select</Link></li>
                    <li className="item"><Link to="/ImgPage" onClick={(e) => this.changeRoute(e)}>Img</Link></li>
                    <li className="item"><Link to="/FormPage" onClick={(e) => this.changeRoute(e)}>Form</Link></li>
                    <li className="item"><Link to="/TextboxPage" onClick={(e) => this.changeRoute(e)}>Textbox</Link></li>
                    <li className="item"><Link to="/TabsPage" onClick={(e) => this.changeRoute(e)}>Tabs</Link></li>
                    <li className="item"><Link to="/ModalPage" onClick={(e) => this.changeRoute(e)}>Modal</Link></li>
                    <li className="item"><Link to="/ToasterPage" onClick={(e) => this.changeRoute(e)}>Toaster</Link></li>
                </ul>
            </div>
    
            
        );
    }

}


export default SideBar;