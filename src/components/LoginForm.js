import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = (event) =>{

    this.setState({
      ...this.state,
      [event.target.name]: event.target.value

    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 || this.state.password.length > 0){
      this.props.handleLogin(this.state)
    }
  }


  render() {
    return (
      <form onSubmit = {this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.changeHandler} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.changeHandler} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
