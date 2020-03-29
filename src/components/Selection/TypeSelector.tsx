import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './selection_styles';

interface TypeSelectorProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const TypeSelector = ({
  type,
  setType,
}: TypeSelectorProps): React.ReactElement => {
  const classes = useStyles({});
  const handleTypeChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    if (typeof e.target.value === 'string') setType(e.target.value);
  };

  return (
    <Select className={classes.select} value={type} onChange={handleTypeChange}>
      <MenuItem value="tracks">tracks</MenuItem>
      <MenuItem value="artists">artists</MenuItem>
    </Select>
  );
};

export default TypeSelector;
