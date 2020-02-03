import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState = { email: "", password: "" };
  };

  render() {
    return (
      <div className="sing-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input name="email" type="email" value={this.state.email} required />
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
          />

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
