import Stats from '../../src/components/Stats/Stats';
import getAllStats from '../../src/utils/hooks/getStats';

const StatsIndex = ({ dark, stats }) => 
  <Stats
    stats={stats}
    dark={dark}
  />

StatsIndex.getInitialProps = async ({ query }) => ({ 
  dark: (query.darkMode === 'true'),
  stats: await getAllStats(query.accessToken)
}); 

export default StatsIndex;