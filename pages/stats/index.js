import Stats from '../../src/components/Stats/Stats';
import getAllStats from '../../src/utils/hooks/getStats';

const StatsIndex = ({ dark, setDark, stats }) => 
  <Stats
    stats={stats}
    dark={dark}
    setDark={setDark}
  />

StatsIndex.getInitialProps = async ({ setDark, query }) => ({ 
  dark: query.darkMode,
  setDark,
  stats: await getAllStats(query.accessToken)
});

export default StatsIndex;