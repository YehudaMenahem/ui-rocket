import React,{createRef} from 'react';

//import components
import Button from './Button';
import Img from './Img';


const Modal = (props) => {
    const {modalTitle, heroImage, classes, show, closeModal, children} = props
    const modalRef = createRef();

    const closeModalWin = (e) => {
        let modal = modalRef;
        modal.current.classList.add('close');
        setTimeout(() =>{
            closeModal && closeModal(e);
        },300) //time for the closing animation
    };

    if(show){
        return (
            <div ref={modalRef} className={`modal ${classes} ${heroImage ? "hero-image" : ""}`} onClick={e => {closeModal(e)}}>
                <div className="box" onClick={e => {e.stopPropagation()}}>
                    {heroImage
                        ?
                        <div className="header">
                            <Img classes={"hero"} src={require('./../assets/images/forgot_password.svg')}></Img>
                            <i className="close-sign close icon" onClick={e => {closeModal(e)}}></i>
                        </div>
                        :
                        <div className="header">
                            <h3>{modalTitle}</h3>
                            <i className="close-sign close icon" onClick={e => {closeModal(e)}}></i>
                        </div>
                    }
                    <div className="body grid">
                        {children}
                    </div>
                    <div className="footer grid">
                        <div className="row">
                            <div className="col-1">
                                <Button     
                                    size="medium"
                                    label="Close Modal"
                                    click={e => {closeModalWin(e);}}>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
    return null  
}

export default Modal;