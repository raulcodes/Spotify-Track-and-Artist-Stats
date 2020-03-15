import Stats from '../../src/components/Stats/Stats';
import getAllStats from '../../src/utils/hooks/getStats';

const StatsIndex = ({ stats }) => 
  <Stats
    stats={stats}
  />

StatsIndex.getInitialProps = async ({ query }) => ({ 
  stats: await getAllStats(query.accessToken)
});

export default StatsIndex;