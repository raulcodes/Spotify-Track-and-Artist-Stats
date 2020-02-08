import React from 'react';

import LimitSelector from '../Selection/LimitSelector';
import TypeSelector from '../Selection/TypeSelector';
import TimeSelector from '../Selection/TimeSelector';

const Selection = ({ setLimit, setType, setTime }) => (
  <div>
    <p>Your top</p>
      <LimitSelector setLimit={setLimit} />
      <TypeSelector setType={setType} />
    <p>for the past</p>
      <TimeSelector setTime={setTime} />
  </div>
);

export default Selection;