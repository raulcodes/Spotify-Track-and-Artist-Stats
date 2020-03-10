import { useState, useEffect } from 'react';

import Stats from '../../src/components/Stats/Stats';
import getAllStats from '../../src/utils/hooks/getStats';

const StatsIndex = ({
  dark, 
  stats: {
    shortTracks,
    mediumTracks,
    longTracks,
    shortArtists,
    mediumArtists,
    longArtists,
    userName
  } 
}) => {
  const [items, setItems] = useState([]);
  
  const [limit, setLimit] = useState(10);
  const [time, setTime] = useState('short');
  const [type, setType] = useState('tracks');
  useEffect(() => {
    switch (time) {
      case 'short':
        if (type === 'tracks')
          if (shortTracks)
            setItems(shortTracks.slice(0, limit))
        else 
          if (shortArtists)
            setItems(shortArtists.slice(0, limit))
        break;
      case 'medium':
        if (type === 'tracks') 
          if (mediumTracks) 
            setItems(mediumTracks.slice(0, limit))
        else 
          if (mediumArtists)
            setItems(mediumArtists.slice(0, limit))
        break;
      case 'long':
        if (type === 'tracks') 
          if (longTracks)
            setItems(longTracks.slice(0, limit))
        else
          if (longArtists)
            setItems(longArtists.slice(0, limit))
        break
      default:
        setItems([])
    }
  }, [limit, time, type]);

  return(
    <Stats
      limit={limit}
      time={time}
      type={type}
      setLimit={setLimit}
      setTime={setTime}
      setType={setType}
      items={items}
      userName={userName}
      dark={dark}
    />
  );
}

StatsIndex.getInitialProps = async ({ query }) => ({ 
  dark: (query.darkMode === 'true'),
  stats: await getAllStats(query.accessToken)
}); 

export default StatsIndex;