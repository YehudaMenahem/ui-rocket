import React,{ useState,useEffect } from 'react';


const Img = (props) => {

    const [src,setSrc] = useState(props.src);
    const [alt,setAlt] = useState(props.alt);
    const [width,setWidth] = useState(props.width);
    const [height,setHeight] = useState(props.height);
    const [classes,setClasses] = useState(props.classes);

    useEffect(() => {
        let src = props.src;
        setSrc(src,src);
    },[props.src])

    useEffect(() => {
        let alt = props.alt ? props.alt : "image"; //default value
        setAlt(alt,alt);
    },[props.alt])

    useEffect(() => {
        let width = props.width ? props.width : "auto"; //default value
        setWidth(width,width);
    },[props.width])

    useEffect(() => {
        let height = props.height ? props.height : "auto"; //default value
        setHeight(height,height);
    },[props.height])

    useEffect(() => {
        let classes = props.classes;
        setClasses(classes,classes);
    },[props.classes])

    return (
        <img 
            src={src} 
            alt={alt} 
            className={classes}
            onClick={props.click} 
            width={width} 
            height={height}  
        />
    );
}

export default Img; 