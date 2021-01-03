import React from 'react';


class Form extends React.Component {
    
    state = {
        title:this.props.title,
        id:this.props.id,
        children:this.props.children,
        classes:this.props.classes,
        novalidate:this.props.novalidate,
        error: false
    };

    static getDerivedStateFromProps(props) {
        return {
            title:props.title,
            id:props.id,
            children:props.children,
            classes:props.classes,
            novalidate:props.novalidate
        }
    }

    onSubmit = (event) => {
        event.preventDefault(); //preventing from refreshing the page

        let submitVal = event.target;
        let res = {};
        let i;
        let preventSubmit = false;

        //get the values of the fields 
        for(i=0; i<submitVal.elements.length; i++){

            if(`${submitVal.elements[i].type}` === 'radio'){
                if(submitVal.elements[i].checked){
                    res[`${submitVal.elements[i].name}`] = `${submitVal.elements[i].value}`;
                } 
            } else if(`${submitVal.elements[i].type}` === 'checkbox'){
                res[`${submitVal.elements[i].name}`] = (submitVal.elements[i].checked) ? true : false;
            } else if(`${submitVal.elements[i].tagName}` === 'SELECT'){
                if(submitVal.elements[i].value === "choose an option"){
                    continue;
                };
                res[`${submitVal.elements[i].name}`] = `${submitVal.elements[i].value}`;
            } else if(`${submitVal.elements[i].type}` === 'submit'){
                continue;
            } else {
                if(`${submitVal.elements[i].value}` === '' && `${submitVal.elements[i].required}`){
                    preventSubmit = true;
                } else {
                    res[`${submitVal.elements[i].name}`] = `${submitVal.elements[i].value}`;
                    preventSubmit = false;
                }
            }
        }

        //prevent submit if there are errors
        if(preventSubmit){
            this.setState({error:true});
            return;
        } else {
            this.setState({error:false});
        }

        this.props.submit(res);
    }


    render(){   
        return (
            <form onSubmit={this.onSubmit} id={this.id} noValidate={this.state.novalidate} className={`${this.state.classes}`}>
                <h3 className="form-header">{this.state.title}</h3>
                {this.state.children}
                {
                    this.state.error 
                    ?
                    <p className={"error"}>Please fill the fields with the astrik (*) mark</p>
                    :
                    null

                }
            </form>
        );
    }
}

Form.defaultProps = {
    title:'',
    id: undefined,
    classes:'',
    children: null,
    novalidate: false
}

export default Form;