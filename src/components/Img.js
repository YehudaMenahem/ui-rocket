import React from 'react';


class Img extends React.Component {

    state = {
        src:this.props.src,
        alt:this.props.alt,
        width:this.props.width,
        height:this.props.height,
        classes:this.props.classes
    }

    static getDerivedStateFromProps(props){
        return {
            src:props.src,
            alt:props.alt,
            width:props.width,
            height:props.height,
            classes:props.classes
        }
    }

    click = (e) => {
        if(this.props.click){
            this.props.click(e.target)
        }
    }

    render(){
        return (
            <img 
                src={this.state.src} 
                alt={this.state.alt} 
                className={this.state.classes}
                onClick={this.click} 
                width={this.state.width} 
                height={this.state.height}  
            />
        );
    }   
}

Img.defaultProps = {
    src:undefined,
    alt:'image',
    width:'auto',
    height:'auto',
    classes:''
}

export default Img; 