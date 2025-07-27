import React from 'react';

const Button = (props) => {
    const { 
        label, 
        styleBtn, 
        size, 
        loading, 
        classes, 
        id, 
        rounded, 
        shadow, 
        disabled, 
        children, 
        scrollToTop, 
        position, 
        key,
        click,
    } = props

    //calling parent function
    const clickButton = (event) => {
        if(scrollToTop){
            scrollTop();
            return;
        }

        if(click){
            click(event);
        }
    }

    const scrollTop = () => {
        window.scroll({ 
            top: 0, 
            behavior: 'smooth' 
        });
    }

    return (
        <button 
            key={key} 
            id={id} 
            className={`button ${loading ? "loading" : null} ${styleBtn} ${size} ${rounded ? "rounded" : null} ${shadow ? "shadow" : null} ${classes}
                        ${scrollToTop && position ? position : null}`} 
            onClick={(e)=>clickButton(e)} 
            disabled={disabled}
            >
            {children}
            {loading &&
                <div className="loading-bg">
                    <div className="stage">
                        <div className="dot-pulse"></div>
                    </div>
                </div>
            }
            <span className="label">{label}</span>
        </button>
    );
}

Button.defaultProps = {
    size: 'small',
    styleBtn: 'solid',
    rounded: false,
    shadow: false,
    disabled: false,
    classes: '',
}

export default Button;
