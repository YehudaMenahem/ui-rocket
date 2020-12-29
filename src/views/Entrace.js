import React from 'react';

//import components
import Img from '../components/Img';

const Entrace = (props) =>{
    return (
        <div className="ui container entrace">
            <div className="grid">

                <div className="row mr-b-md">
                    <div className="col">
                        <h1 className="title">Hey There <br></br> & Welcome <span role={"img"} className={"wavemoji"}><span className={"hey-sign"} role="img" aria-label="hey sign">👋</span></span></h1>
                    </div>
                </div>

                <div className="row mr-b-md">
                    <div className="col-2 mobile-col-1">
                        <p className={"line-break"}>{`Ui Rocket is a components library project made with react.
                                The components are class based and function based (functional components)
                                Every page presents component and gives a brief of 
                                interactive demonstration, props explanation and code snippet example.
                                Ui Rocket is browsers friendly and mobile friendly, has a theme mode at
                                top which you can determined by your preferences.
                                Notice please, that in the form page, there's a way to send feedback - criticism from all kinds is blessed and will accepted with love, so - would love to hear your opinion.

                                I really hope you'll enjoy my little project.
                                Happy coding & Have a great and successful day
                                Yehuda 
                            `}
                        </p>
                    </div>
                </div>

            </div>
            {props.theme ?
                <Img src={require('./../assets/images/rocket_BW_illustration_dark_mode.svg')} classes="main-img"></Img>
                :
                <Img src={require('./../assets/images/rocket_BW_illustration.svg')} classes="main-img"></Img>

            }
        </div>
    );
};

export default Entrace;