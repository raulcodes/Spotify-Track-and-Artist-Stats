import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './selection_styles';

const TimeSelector = ({ time, setTime }) => {
  const classes = useStyles({});
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  };

  return(
    <Select 
      className={classes.select}
      value={time}
      onChange={handleTimeChange}
    >
      <MenuItem value="short">4 weeks</MenuItem>
      <MenuItem value="medium">6 months</MenuItem>
      <MenuItem value="long">couple of years</MenuItem>
    </Select>
  );
};

export default TimeSelector;