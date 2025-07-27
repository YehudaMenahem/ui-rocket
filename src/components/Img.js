import React from 'react';


const Img = (props) => {
    const {src, alt, width, height, classes, click} = props

    return (
        <img 
            src={src} 
            alt={alt} 
            className={classes}
            onClick={click} 
            width={width} 
            height={height}  
        />
    );
}

export default Img; 