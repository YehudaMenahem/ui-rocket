import React from 'react'   

class Toaster extends React.Component{
    state = {
        classes: this.props.classes,
        type: this.props.type,
        id: this.props.id,
        position: this.props.position,
        title: this.props.title,
        runningText: this.props.runningText,
        show: this.props.show
    }

    ToasterRef = React.createRef();

    static getDerivedStateFromProps(props){
        return {
            classes: props.classes,
            type: props.type,
            id: props.id,
            position: props.position,
            title: props.title,
            runningText: props.runningText,
            show: props.show
        }
    }

    closeToaster = () => {
        let Toaster = this.ToasterRef;
        Toaster.current.classList.add('close');
        setTimeout(() =>{
            this.props.closeToaster && this.props.closeToaster();
        },300) //time for the closing animation to happen
    };

    iconType = () =>{
        let icon;
        switch(this.state.type){
            case 'success':
                icon = <i className='icon check circle'></i>
                break;
            case 'info':
                icon = <i className='icon info circle'></i>
                break;
            case 'error':
                icon = <i className='icon times circle'></i>
                break;
            case 'warning':
                icon = <i className='icon exclamation triangle'></i>
                break;

            default:
                icon = <i className='icon info circle'></i>
                break;
        }

        return icon;
    }

    render(){
        if(!this.props.show){
            return null;
        }   
        return (
            <div ref={this.ToasterRef} className={`toaster ${this.state.type} ${this.state.position}`}>
                {/* permenint */}
                <i className={"icon close"} onClick={e => {this.closeToaster();}}></i>
                <div className="icon-type mr-r-lr">
                    {/* changes by type */}
                    <span>{this.iconType()}</span>
                </div>
                <div className="content">
                    {/* changes by user input */}
                    <h4 className="title">{this.state.title}</h4>
                    {/* changes by user input */}
                    <p className="running-text">{this.state.runningText}</p>
                </div>
            </div>
        )
    }
}

Toaster.defaultProps = {
    classes: '',
    type: 'info',
    id: '',
    position: 'top-right',
    title: 'info',  
    runningText: '',
    show: false
}

export default Toaster;