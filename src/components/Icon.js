import React from 'react';


class Icon extends React.Component {

    state = {
        classes:this.props.classes,
        iconClass:this.props.iconClass,
        theme:this.props.theme,
        click: this.props.click
    }

    static getDerivedStateFromProps(props){
        return { 
            classes: props.classes,
            iconClass: props.iconClass,
            theme: props.theme,
            click: props.click
        }
    }

    click = (event) =>{
        if(this.props.click){
            this.props.click(event.target);
        }
    }

    render(){
        return (
            <span className={`icon-wrapper ${this.state.classes} ${this.state.theme}`}>
                <i className={`icon ${this.state.iconClass}`} onClick={this.click}></i>
            </span>
        );
    }
};

Icon.defaultProps = {
    theme: 'primary',
    classes: '',
    iconClass: '',

}

export default Icon; 