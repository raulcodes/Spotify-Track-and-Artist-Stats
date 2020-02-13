import React from 'react';
import Card from '@material-ui/core/Card';

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
}) => {
  const classes = useStyles({});

  return(
    <Card elevation={0} className={classes.selectCard}>
      <p className={classes.text}>Your top</p>
        <LimitSelector limit={limit} setLimit={setLimit} />
        <TypeSelector type={type} setType={setType} />
      <p className={classes.text}>for the past</p>
        <TimeSelector time={time} setTime={setTime} />
    </Card>
  );
};

export default Selection;