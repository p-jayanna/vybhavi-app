import { Checkbox, TextField } from "@material-ui/core";
import React, { PureComponent } from "react";
import ShowState from "../components/ShowState";

class ClassStateExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberMe: false
    };
  }

  render() {
    return (
      <div>
        <p> Class State example screen </p>
        <TextField
          id="standard-basic"
          type="text"
          label="Username"
          value={this.state.username}
          onChange={(event) => {
            this.setState({ username: event.target.value });
          }}
        />
        <p></p>
        <TextField
          id="standard-basic"
          type="password"
          label="Password"
          value={this.state.password}
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />

        <p></p>
        <Checkbox
          color="primary"
          checked={this.state.rememberMe}
          onChange={(event)=>{this.setState({rememberMe: event.target.checked})}}
          
        />
        <ShowState name={this.state.username} password={this.state.password} rememberMe={this.state.rememberMe} />
      </div>
    );
  }
}

export default ClassStateExample;
