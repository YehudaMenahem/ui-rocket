import React from 'react';

//import components
import Button from './Button';
import Img from './Img';


class Modal extends React.Component {

    state = {
        headerTitle:this.props.headerTitle,
        closeButton:this.props.closeButton,
        classes:this.props.classes,
        theme:this.props.theme,
        modalTitle:this.props.modalTitle,
        show:this.props.show,
        heroImage:this.props.heroImage
    }
    
    modalRef = React.createRef();

    static getDerivedStateFromProps(props) {
        return {
            headerTitle:props.headerTitle,
            closeButton:props.closeButton,
            classes:props.classes,
            theme:props.theme,
            modalTitle:props.modalTitle,
            show:props.show,
            heroImage:props.heroImage
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
    headerTitle:'',
    closeButton:'',
    classes:'',
    theme:'primary',
    modalTitle:'Modal',
    show:true
}

export default Modal;