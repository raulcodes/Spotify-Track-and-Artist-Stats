import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useStyles from './selection_styles';

interface TimeSelectorProps {
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

const TimeSelector = ({
  time,
  setTime,
}: TimeSelectorProps): React.ReactElement => {
  const classes = useStyles({});
  const handleTimeChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    if (typeof e.target.value === 'string') setTime(e.target.value);
  };

  return (
    <Select className={classes.select} value={time} onChange={handleTimeChange}>
      <MenuItem value="short">4 weeks</MenuItem>
      <MenuItem value="medium">6 months</MenuItem>
      <MenuItem value="long">couple of years</MenuItem>
    </Select>
  );
};

export default TimeSelector;
