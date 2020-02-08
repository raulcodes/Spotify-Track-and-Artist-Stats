import React from 'react';
import Select from 'react-select';

import { typeOptions } from '../../utils/options';

const TypeSelector = ({ setType }) => {
  const [selectedTypeOption, setTypeOption] = React.useState(typeOptions[0]);

  const handleTypeChange = (selectedOption) => {
    setType(selectedOption.value)
    setTypeOption(selectedOption)
  };

  return(
    <Select 
      value={selectedTypeOption}
      onChange={handleTypeChange}
      options={typeOptions}
      placeholder='tracks' 
    />
  );
};

export default TypeSelector;