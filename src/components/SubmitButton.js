import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SubmitButton = () => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<DeleteIcon />}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
