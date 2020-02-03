import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="sing-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form>
          <label for="email">Email</label>
          <input name="email" type="email" value={this.state.email} required></input>
          <label for="password">Password</label>
          <input name="password" type="password" value={this.state.password} required></input>
        </form>
      </div>
    );
  }
}

export default SignIn;
