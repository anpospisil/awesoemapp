import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const types = props.types;

  const [checked, setChecked] = useState(types.map(() => true));

  console.log("gg", types);

  const classes = useStyles();

  const handleChange = (index) => {
    let newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pokemon Types</FormLabel>
        {types.map((type, index) => {
          return (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked[index] || false}
                    onClick={() => handleChange(index)}
                    name={type}
                  />
                }
                label={type}
              />
            </FormGroup>
          );
        })}
      </FormControl>
    </div>
  );
}
