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
      <h1>Howdy!</h1>
      <div className={classes.selectors}>
        <h2>Here are your top</h2>
        <LimitSelector limit={limit} setLimit={setLimit} />
        <TypeSelector type={type} setType={setType} />
      </div>
      <div className={classes.selectors}>
        <h2>for the past</h2>
        <TimeSelector time={time} setTime={setTime} />
      </div>
    </Card>
  );
};

export default Selection;