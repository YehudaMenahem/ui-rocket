// Import the React and ReactDOM libraries
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { setModal, setToaster } from './../actions';

// Import routes components
import Entrance from './../routes/Entrance';
import IconPage from './../routes/IconPage';
import ButtonPage from './../routes/ButtonPage';
import RadioPage from './../routes/RadioPage';
import CheckboxPage from './../routes/CheckboxPage';
import InputFieldPage from './../routes/InputFieldPage';
import SelectFieldPage from './../routes/SelectFieldPage';
import ImgPage from './../routes/ImgPage';
import TextboxPage from './../routes/TextboxPage';
import ModalPage from './../routes/ModalPage';
import TabsPage from './../routes/TabsPage';
import ToggleButtonPage from './../routes/ToggleButtonPage';
import ToasterPage from '../routes/ToasterPage'; 

// Import components
import SideBar from './SideBar';
import Modal from './Modal';
import Img from './Img';
import Icon from './Icon';
import Toaster from './Toaster';
import ToggleButton from './ToggleButton';
import ErrorBoundary from './ErrorBoundary'

//dynamic import (lazy loading)
const DynamicFormPage = lazy(()=>import('./../routes/FormPage'))

// Create a react component
class App extends React.Component  {

    state = {
        lat:null, 
        errMessage:null, 
        openerState:undefined,
        toggleSideBar:false,
        darkTheme:false
    }

    openerRef = React.createRef();

    closeSideBar = () => {
        //detect if desktop or mobile
        let mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
        let html = document.querySelector('html');
        let toggleState = this.state.toggleSideBar;
        if(mobile){
            toggleState ? html.classList.add('no-scroll') : html.classList.remove('no-scroll');
        }
        this.setState({
            toggleSideBar: !toggleState
        })
    }

    closeModal = () =>{
        this.props.setModal({showModal:false});
    }

    closeToaster = () =>{
        this.props.setToaster({showToaster:false});
    }

    componentDidMount(){
        //detect if desktop or mobile
        let mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
        let html = document.querySelector('html');

        //at the begining the side bar is open and the html cannot be scrolled
        if(mobile)
            html.classList.add('no-scroll');

        //get time
        let day = new Date();
        let hourInDay = day.getHours();
        let theme =  hourInDay >= 17 || hourInDay <= 4 ? 'dark' : 'light';
        theme === 'dark' ? this.setState({darkTheme: true}) : this.setState({darkTheme: false});
        html.classList.add(theme);

        // opener only appears on entrance page
        let location = window.location.href;
        let onEntrancePage = location.indexOf('Page') === -1 ? true : false;
        if(onEntrancePage){this.setState({openerState:true})};
    }

    opener = () => {
        let loaderJsx =  
            <div className="welcome-window">
                <div className="top-half">
                    <Img classes="rocket" src={require("./../assets/images/rocket.svg")} width='200px' height='200px'/>
                </div>
                <div className="bottom-half">
                    <h2 className="title">Rocket UI</h2>
                </div>
            </div> ;
            
        // remove element after aninmation
        setTimeout(() => {
            this.setState({
                openerState: false
            })  
        }, 5500); //time of the animation

        return loaderJsx;
    }

    changeTheme(state){
        let html = document.querySelector('html');
        if(state){
            html.classList.add('dark'); 
            html.classList.remove('light');
        } else {
            html.classList.add('light'); 
            html.classList.remove('dark');   
        }

        this.setState({
            darkTheme: state
        })
    }



    render(){

        return (
            <Router>
                {/*modal at the top of the app for anyone to call*/}
                <Modal 
                    show={this.props.modalSettings.showModal} 
                    closeModal={this.closeModal} 
                    modalTitle={this.props.modalSettings.headerTitle}
                    heroImage={this.props.modalSettings.heroImage}
                    >
                    <div className="row">
                        <div className="col-1">
                            <h2>{this.props.modalSettings.contentTitle}</h2>
                            <p className="line-break">{this.props.modalSettings.contentRunningText}</p>
                        </div>
                    </div>
                </Modal>

                {/* toaster component */}
                <Toaster 
                    show={this.props.toasterSettings.showToaster}
                    closeToaster={this.closeToaster}
                    type={this.props.toasterSettings.type}
                    title={this.props.toasterSettings.title}
                    position={this.props.toasterSettings.position}
                    runningText={this.props.toasterSettings.runningText}
                />

                <div className="home-page">  
                        <ToggleButton 
                            classes={'toggle-theme'} 
                            label="Mode: Light/Dark" 
                            name="theme" 
                            id="theme" 
                            isChecked={this.state.darkTheme} 
                            change={(e) => this.changeTheme(e)} 
                        />

                    {
                        (this.state.openerState)
                        ?
                        this.opener()
                        :
                        ""
                    }

                    {/* header for mobile */}
                    <div className={`mobile-header ${this.state.toggleSideBar ? "close" : "open"}`}>
                        <h3><Icon classes={"mr-r-md"} iconClass={"rocket"}></Icon>Rocket UI</h3>
                        <i className={"close-icon mr-l-auto"} onClick={this.closeSideBar}>
                            <span className={"strip"}></span>
                            <span className={"strip"}></span>
                            <span className={"strip"}></span>
                        </i>
                    </div>

                    <SideBar closeBar={this.state.toggleSideBar} closeSideBar={this.closeSideBar}/>

                    {/*Components explanations area*/}
                    <div className="components-info">
                        <Route path="/" exact
                            render={(props) => (
                                <Entrance {...props} theme={this.state.darkTheme}/>
                            )}
                        ></Route>
                        <Route path="/ButtonPage" component={ButtonPage}></Route>
                        <Route path="/IconPage" component={IconPage}></Route>
                        <Route path="/RadioPage" component={RadioPage}></Route>
                        <Route path="/CheckboxPage" component={CheckboxPage}></Route>
                        <Route path="/ToggleButtonPage" component={ToggleButtonPage}></Route>
                        <Route path="/InputFieldPage" component={InputFieldPage}></Route>
                        <Route path="/SelectFieldPage" component={SelectFieldPage}></Route>
                        <Route path="/ImgPage" component={ImgPage}></Route>
                        <ErrorBoundary>
                            <Suspense fallback={<h2>Loading...</h2>}>
                                <Route path="/FormPage" 
                                        component={DynamicFormPage}>    
                                </Route>
                            </Suspense>
                        </ErrorBoundary>
                        <Route path="/TextboxPage" component={TextboxPage}></Route>
                        <Route path="/TabsPage" component={TabsPage}></Route>
                        <Route path="/ModalPage" component={ModalPage}></Route>
                        <Route path="/ToasterPage" component={ToasterPage}></Route>
                    </div>                
                </div>
            </Router>
        );
    }
};

const mapStateToProps = (state) =>{
    return {
        modalSettings: state.modalSettings,
        toasterSettings: state.toasterSettings
    }
}


export default connect(mapStateToProps,{setModal,setToaster})(App);