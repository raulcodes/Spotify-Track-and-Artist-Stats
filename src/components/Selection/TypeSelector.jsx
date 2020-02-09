import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const TypeSelector = ({ type, setType }) => {
  const handleTypeChange = (e) => {
    setType(e.target.value)
  };

  return(
    <Select 
      value={type}
      onChange={handleTypeChange}
    >
      <MenuItem value="tracks">tracks</MenuItem>
      <MenuItem value="artists">artists</MenuItem>
    </Select>
  );
};

export default TypeSelector;