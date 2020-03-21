import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './selection_styles';
import LimitSelector from './LimitSelector';
import TypeSelector from './TypeSelector';
import TimeSelector from './TimeSelector';

interface SelectionProps {
  limit: number;
  time: string;
  type: string;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
}

const Selection = ({ 
  limit, 
  time, 
  type,
  setLimit, 
  setTime, 
  setType, 
  userName,
}: SelectionProps): React.ReactElement => {
  const classes = useStyles({});

  return(
    <div className={classes.selectCard}>
      <Typography variant="h4">
        Hello, {userName}!
      </Typography>
      <div className={classes.selectionPrompt}>
        <Typography variant="body2">Here are your top</Typography>
        <div className={classes.selectors}>
          <LimitSelector limit={limit} setLimit={setLimit} />
          <TypeSelector type={type} setType={setType} />
        </div>
        <Typography variant="body2">for the past</Typography>
        <div className={classes.selectors}>
          <TimeSelector time={time} setTime={setTime} />
        </div>
      </div>
    </div>
  );
};

export default Selection;