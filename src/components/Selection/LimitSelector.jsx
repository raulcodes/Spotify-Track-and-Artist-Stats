import React from 'react';
import Select from 'react-select';

import { limitOptions } from '../../utils/options';

const LimitSelector = ({ setLimit }) => {
  const [selectedLimitOption, setLimitOption] = React.useState(limitOptions[0])

  const handleLimitChange = (selectedOption) => {
    setLimit(selectedOption.label)
    setLimitOption(selectedOption)
  };

  return(
    <Select 
      value={selectedLimitOption}
      onChange={handleLimitChange}
      options={limitOptions}
      placeholder='10' 
    />
  );
};

export default LimitSelector;