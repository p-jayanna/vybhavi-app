import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import CancelButton from "./components/CancelButton";
import SubmitButton from "./components/SubmitButton";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <div className="app-form">
        <div className="input-group">
          <TextField id="standard-basic" label="Username" />
          <TextField id="standard-basic" label="Email" />
          <div className="input-second-group">
            <FormLabel component="legend"><b>Gender:</b></FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </div>
        </div>

        <div className="button-group">
          <SubmitButton />
          <CancelButton />
        </div>
      </div>
    </div>
  );
}

export default App;
