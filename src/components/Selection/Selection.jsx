import React from 'react';

import useStyles from './selection_styles';
import LimitSelector from '../Selection/LimitSelector';
import TypeSelector from '../Selection/TypeSelector';
import TimeSelector from '../Selection/TimeSelector';

const Selection = ({ setLimit, setType, setTime }) => {
  const classes = useStyles({});

  return(
    <div>
      <p className={classes.text}>Your top</p>
        <LimitSelector setLimit={setLimit} />
        <TypeSelector setType={setType} />
      <p className={classes.text}>for the past</p>
        <TimeSelector setTime={setTime} />
    </div>
  );
};

export default Selection;