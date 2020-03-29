import Stats from '../../src/components/Stats/Stats';
import getAllStats from '../../src/utils/hooks/getStats';

const StatsIndex = ({ stats, token }) => <Stats stats={stats} token={token} />;

StatsIndex.getInitialProps = async ({ query }) => ({
  stats: await getAllStats(query.accessToken),
  token: query.accessToken,
});

export default StatsIndex;
