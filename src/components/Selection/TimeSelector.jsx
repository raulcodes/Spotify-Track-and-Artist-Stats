import React from 'react';
// import Select from 'react-select';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const TimeSelector = ({ time, setTime }) => {
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  };

  return(
    <Select 
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