import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import useStyles from './selection_styles';
import LimitSelector from '../Selection/LimitSelector';
import TypeSelector from '../Selection/TypeSelector';
import TimeSelector from '../Selection/TimeSelector';

const Selection = ({ 
  limit, 
  time, 
  type,
  setLimit, 
  setTime, 
  setType, 
  userName,
}) => {
  const classes = useStyles({});

  return(
    <div className={classes.selectCard}>
      <Typography variant="h4">
        Hello, {userName.split(' ')[0]}!
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