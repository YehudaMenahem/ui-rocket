import React from 'react';


class Button extends React.Component {

    state = {
        label:this.props.label, 
        styleBtn:this.props.styleBtn, 
        size:this.props.size,
        click:this.props.click, 
        loading:this.props.loading, 
        classes:this.props.classes, 
        theme:this.props.theme,
        id:this.props.id,
        rounded: this.props.rounded === true ? "rounded" : "",
        shadow: this.props.shadow === true ? "shadow" : "", 
        disabled:this.props.disabled,   
        children:this.props.children,
        index:this.props.index,
        scrollToTop: this.props.scrollToTop,
        position: this.props.position
    }       

    static getDerivedStateFromProps(props) {
        return {
            styleBtn: props.styleBtn,
            label: props.label,
            size: props.size,
            id: props.id,
            loading: props.loading, 
            classes: props.classes, 
            theme: props.theme,
            rounded:  props.rounded === true ? "rounded" : "",
            shadow:  props.shadow === true ? "shadow" : "", 
            click: props.click, 
            disabled: props.disabled,   
            children: props.children,
            index: props.index,
            scrollToTop: props.scrollToTop,
            position: props.position
        }
    }

    //calling parent function
    click = (event) => {
        if(this.state.scrollToTop){
            this.scrollTop();
            return;
        }

        if(this.props.click){
            this.props.click(event);
            return;
        }
    }

    scrollTop(){
        window.scroll({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }

    render(){
        return (
            <button 
                key={this.state.key} 
                id={this.state.id} 
                type={this.state.type}
                index={this.state.index} 
                className={`button ${this.state.loading ? 'loading' : ''} ${this.state.theme} ${this.state.styleBtn} ${this.state.size} ${this.state.rounded} ${this.state.shadow} ${this.state.classes}
                            ${this.state.scrollToTop && this.state.position ? this.state.position : ""}`} 
                onClick={(e)=>this.click(e)} 
                disabled={this.state.disabled}
                >
                {this.state.children}
                {this.state.loading
                    ? 
                    <div className="loading-bg">
                        <div className="stage">
                            <div className="dot-pulse"></div>
                        </div>
                    </div>
                    :
                    ""
                }
                <span className="label">{this.state.label}</span>
            </button>
        );
    }
}

Button.defaultProps = {
    label:'', 
    type: 'button',
    styleBtn: 'solid', 
    size: 'medium',
    loading: false, 
    classes: '', 
    theme: 'primary',
    id: undefined,
    rounded: true,
    shadow: false, 
    disabled: false,   
    children: null,
    index: undefined
}

export default Button;
