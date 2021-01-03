import React from 'react';

//import components
import Button from './Button';
import Img from './Img';


class Modal extends React.Component {

    state = {
        modalTitle:this.props.modalTitle,
        heroImage:this.props.heroImage,
        closeButton:this.props.closeButton,
        classes:this.props.classes,
        show:this.props.show
    }
    
    modalRef = React.createRef();

    static getDerivedStateFromProps(props) {
        return {
            modalTitle:props.modalTitle,
            heroImage:props.heroImage,
            closeButton:props.closeButton,
            classes:props.classes,
            show:props.show
        }
    }

    closeModal = e => {
        let modal = this.modalRef;
        modal.current.classList.add('close');
        setTimeout(() =>{
            this.props.closeModal && this.props.closeModal(e);
        },300) //time for the closing animation to happen
    };

    render(){
        if(!this.props.show){
            return null;
        }   
        return (
            <div ref={this.modalRef} className={`modal ${this.state.heroImage ? "hero-image" : ""}`} onClick={e => {this.closeModal(e)}}>
                <div className="box" onClick={e => {e.stopPropagation()}}>
                    {this.state.heroImage
                        ?
                        <div className="header">
                            <Img classes={"hero"} src={require('./../assets/images/forgot_password.svg')}></Img>
                            <i className="close-sign close icon" onClick={e => {this.closeModal(e)}}></i>
                        </div>
                        :
                        <div className="header">
                            <h3>{this.state.modalTitle}</h3>
                            <i className="close-sign close icon" onClick={e => {this.closeModal(e)}}></i>
                        </div>
                    }
                    <div className="body grid">
                        {this.props.children}
                    </div>
                    <div className="footer grid">
                        <div className="row">
                            <div className="col-1">
                                <Button     
                                    size="medium"
                                    label="Close Modal"
                                    click={e => {this.closeModal(e);}}>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.defaultProps = {
    closeButton:'',
    classes:'',
    modalTitle:'Modal',
    show:true
}

export default Modal;