import React from 'react';

//import components
import Img from './../components/Img';
import Tabs from './../components/Tabs'
import Icon from './../components/Icon'

//import services
import unsplash from '../api/unsplash';

class ImgPage extends React.Component{

    state = {
        tabs:['Img'],
        activeTab: 0,
        imageFromAjax: null
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async() => {
        const res = await
        unsplash.get('/search/photos', {
            params:{
                query: 'men'
            }
        });

        this.setState({
            imageFromAjax: res.data.results[0].urls.small
        })

    }

    renderView(){
        let view;

        switch(Number.parseInt(this.state.activeTab)){

            default: //case 0
            view =
            <div className="row">
                <div className="col-4">
                    <Img
                        src={this.state.imageFromAjax || 'https://source.unsplash.com/random'}
                        alt="unsplash random image"
                        width="auto"
                        height="200px"
                    />
                </div>
            </div>
        }

        return view;
    }

    setActiveTab(currentTab){
        this.setState({
            activeTab: currentTab
        })
    }

    //copy code to clipboard
    copyCode = () =>{
        const textarea = this.textArea;
        textarea.select();
        document.execCommand('copy');
    }

    render(){
        return (
            <div className="ui container">
                <div className="grid">

                    <div className="row section">                    
                        <div className="col-1">
                            <h1>Img</h1>
                        </div>
                        <div className="col-1">
                            <p>Img is a tag that holds space for an image to be embeded into the page.</p>                    
                        </div>                    
                    </div>

                    <div className="row section">                    
                        <div className="col-1 mr-b-xl">
                            <h2>Demo</h2>
                        </div>
                 
                        <div className="col-1">
                            <div className="container">   

                                <Tabs tabs={this.state.tabs} activeTab={this.state.activeTab} setActiveTab={(e)=>{this.setActiveTab(e)}} />

                                <div className="content">
                                    {this.renderView()}

                                    {this.state.userselection}
                                </div>
                            </div>
                        </div>                    
                    </div>

                    <div className="row section">                    
                        <div className="col-1 props-keys">
                            {/* props options */}
                            <h2>Img props</h2>
                            <p><span className="bold prop">src:</span> The src of the image - a web page adress (endpoint) | string</p>
                            <p><span className="bold prop">alt:</span> Altrnative text in some case the element doesn't load to page | string </p>
                            <p><span className="bold prop">width:</span> Width size of the image in the page | string </p>
                            <p><span className="bold prop">height:</span> Height size of the image in the page | string </p>
                            <p><span className="bold prop">classes:</span> custom classes that can be added to the component | string </p>
                            <p><span className="bold prop">click:</span> A function from parent that will occur when the user click on the image | function </p>
                        </div>                    
                    </div>


                    <div className="row section">                    
                        <div className="col-1">
                            {/*how to use*/}
                            <h2>How to use</h2>
                            <div className="code-wrapper">
                            <textarea
                                    className={'snippet'}
                                    ref={(textarea) => this.textArea = textarea}
                                    value={`
<SelectField
  label="User Name"
  theme="primary"
  classes="your-class"
  id="id"
  name="name-for-submit"
  change={this.onChangeEvent}
  disabled={true}
  required={true} />
                                    `}
                                    readOnly={true}
                                />
                                <div className={"circle"}>
                                    <Icon iconClass={'copy'} click={this.copyCode}></Icon>
                                    <span className="tooltiptext">copy code to clipboard</span>
                                </div>
                                <code>
                                    <span className="brackets">{"<"}</span>
                                    <span className="props">
                                        <span className="component">{'Img'}</span><br></br>
                                        <span className="indent-code">
                                            &nbsp; {'src='}<span className="props-value">{'"imageSrc"'}</span><br></br>
                                            &nbsp; {'alt='}<span className="props-value">{'"User Avatar"'}</span><br></br>
                                            &nbsp; {'width='}<span className="props-value">{'"200px"'}</span><br></br>
                                            &nbsp; {'height='}<span className="props-value">{'"auto"'}</span><br></br>
                                            &nbsp; {'classes='}<span className="props-value">{'"your-class"'}</span> <br></br>
                                            &nbsp; {'click='}<span className="element">{'{this.'}<span className="function">{'onClickEvent'}</span>{'}'}</span>
                                            <span className="brackets">{" />"}</span><br></br>
                                        </span>
                                    </span>
                                </code>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ImgPage;