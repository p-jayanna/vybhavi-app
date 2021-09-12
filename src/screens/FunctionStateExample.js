import { Checkbox, TextField } from "@material-ui/core";
import { useState } from "react";
import ShowState from "../components/ShowState";

const FunctionStateExample = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div>
      <p>It is a react functional component</p>
      <TextField
        id="standard-basic"
        type="text"
        label="Username"
        value={username}
        onChange={(props) => {
          setUsername(props.target.value);
        }}
      />
      <p></p>
      <TextField
        id="standard-basic"
        type="password"
        label="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <p></p>
      <Checkbox
        color="primary"
        checked={rememberMe}
        onChange={(event) => {
          setRememberMe(event.target.checked);
        }}
      />
      <ShowState name={username} password={password} rememberMe={rememberMe} />
    </div>
  );
};

export default FunctionStateExample;
