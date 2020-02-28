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
    <Card elevation={0} className={classes.selectCard}>
      <Typography variant="h4">
        Hello, {userName.split(' ')[0]}!
      </Typography>
      <h3>Here are your top</h3>
      <div className={classes.selectors}>
        <LimitSelector limit={limit} setLimit={setLimit} />
        <TypeSelector type={type} setType={setType} />
      </div>
      <h3>for the past</h3>
      <div className={classes.selectors}>
        <TimeSelector time={time} setTime={setTime} />
      </div>
    </Card>
  );
};

export default Selection;