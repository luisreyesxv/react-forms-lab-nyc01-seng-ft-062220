import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      twitterText: ""
    };
  }


  changeHandler = (event) =>{
    
    this.setState({
      twitterText: event.target.value
    })


  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.twitterText} onChange ={this.changeHandler} />
       {this.props.maxChars - this.state.twitterText.length}
      </div>
    );
  }
}

export default TwitterMessage;
