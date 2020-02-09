import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const LimitSelector = ({ limit, setLimit }) => {
  const handleLimitChange = (e) => {
    setLimit(e.target.value)
  };

  return(
    <Select 
      value={limit}
      onChange={handleLimitChange}
    >
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={30}>30</MenuItem>
      <MenuItem value={40}>40</MenuItem>
      <MenuItem value={50}>50</MenuItem>
    </Select>
  );
};

export default LimitSelector;