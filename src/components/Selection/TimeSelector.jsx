import React from 'react';
import Select from 'react-select';

import { timeOptions } from '../../utils/options';

const TypeSelector = ({ setTime }) => {
  const [selectedTimeOption, setTimeOption] = React.useState(timeOptions[0]);

  const handleTimeChange = (selectedOption) => {
    setTime(selectedOption.value)
    setTimeOption(selectedOption)
  };

  return(
    <Select 
      value={selectedTimeOption}
      onChange={handleTimeChange}
      options={timeOptions}
      placeholder="4 weeks" 
    />
  );
};

export default TypeSelector;