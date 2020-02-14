import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './selection_styles';

const TypeSelector = ({ type, setType }) => {
  const classes = useStyles({});
  const handleTypeChange = (e) => {
    setType(e.target.value)
  };

  return(
    <Select 
      className={classes.select}
      variant="outlined"
      value={type}
      onChange={handleTypeChange}
    >
      <MenuItem value="tracks">tracks</MenuItem>
      <MenuItem value="artists">artists</MenuItem>
    </Select>
  );
};

export default TypeSelector;