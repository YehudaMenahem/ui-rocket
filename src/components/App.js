// Import the React and ReactDOM libraries
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import routes components
import Entrace from './../views/Entrace';
import IconPage from './../views/IconPage';
import ButtonPage from './../views/ButtonPage';
import RadioPage from './../views/RadioPage';
import CheckboxPage from './../views/CheckboxPage';
import InputFieldPage from './../views/InputFieldPage';
import SelectFieldPage from './../views/SelectFieldPage';
import ImgPage from './../views/ImgPage';
import FormPage from './../views/FormPage';
import TextboxPage from './../views/TextboxPage';
import ModalPage from './../views/ModalPage';
import TabsPage from './../views/TabsPage';
import ToggleButtonPage from './../views/ToggleButtonPage';
import ToasterPage from '../views/ToasterPage'; 

// Import components
import SideBar from './SideBar';
import Modal from './Modal';
import Img from './Img';
import Icon from './Icon';
import Toaster from './Toaster';
import ToggleButton from './ToggleButton';

//Import styles
//imported from scss in index.js file


// Create a react component
class App extends React.Component  {

    state = {
        lat:null, 
        errMessage:null, 
        showModal:false,
        showToaster:false,
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

    showModal = (e) =>{
        this.setState({
            showModal: !this.state.showModal
        });
    }

    showToaster = (fromTrigger) =>{
        let toastState = this.state.showToaster;
        if(fromTrigger && toastState){
            return
        }
        this.setState({
            showToaster: !toastState
        });
    }

    componentDidMount(){
        //detect if desktop or mobile
        let mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
        let html = document.querySelector('html');

        //at the begining the side bar is open and the html cannot be scrolled
        if(mobile)
            html.classList.add('no-scroll');

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errMessage: err.message})
        );
        this.setState({title:'clickof'});

        //get time
        let day = new Date();
        let hourInDay = day.getHours();
        let theme =  hourInDay >= 17 || hourInDay <= 4 ? 'dark' : 'light';
        theme === 'dark' ? this.setState({darkTheme: true}) : this.setState({darkTheme: false});
        html.classList.add(theme);

        //opener only appears on entrace page
        let location = window.location.href;
        let onEntracePage = location.indexOf('Page') === -1 ? true : false;
        if(onEntracePage){this.setState({openerState:true})};
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
                    show={this.state.showModal} 
                    closeModal={this.showModal} 
                    modalTitle={'Modal Header'}
                    heroImage={require('./../assets/images/forgot_password.svg')}
                    >
                    <div className="row">
                        <div className="col-1">
                            <h2>Forgot Password?</h2>
                            <p className="line-break">{`Don't worry, it happens. 
                                We will send you a reminder right away.`}</p>
                        </div>
                    </div>
                </Modal>

                {/* toaster component */}
                <Toaster 
                    show={this.state.showToaster}
                    closeToaster={this.showToaster}
                    type={"success"}
                    title={"Bon appetit"}
                    position={"top-right"}
                    runningText={"Your toast is ready"}
                />

                <div className="home-page">  
                        <ToggleButton classes={'toggle-theme'} label="Mode: Light/Dark" name="theme" id="theme" checked={this.state.darkTheme} change={(e) => this.changeTheme(e)} />

                    {
                        (this.state.openerState)
                        ?
                        this.opener()
                        :
                        ""
                    }

                    {/* header for mobile */}
                    <div className={`mobile-header ${this.state.toggleSideBar ? "close" : "open"}`}>
                        {/* <Link to="/" onClick={(e) => this.changeRoute(e)}> */}
                            <h3><Icon classes={"mr-r-md"} iconClass={"rocket"}></Icon>Rocket UI</h3>
                        {/* </Link> */}
                        {/* <Icon classes={"close close-button"} click={this.closeSideBar} /> */}
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
                                <Entrace {...props} theme={this.state.darkTheme}/>
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
                        <Route path="/FormPage" component={FormPage}></Route>
                        <Route path="/TextboxPage" component={TextboxPage}></Route>
                        <Route path="/TabsPage" component={TabsPage}></Route>
                        <Route path="/ModalPage"   
                            render={(props) => (
                                <ModalPage {...props} modalStatus={this.state.showModal} showModal={this.showModal}/>
                            )}
                        >
                        </Route>
                        <Route path="/ToasterPage"   
                            render={(props) => (
                                <ToasterPage {...props} toasterStatus={this.state.showToaster} showToaster={this.showToaster}/>
                            )}
                        >
                        </Route>
                    </div>                
                </div>
            </Router>
        );
    }
};


export default App;