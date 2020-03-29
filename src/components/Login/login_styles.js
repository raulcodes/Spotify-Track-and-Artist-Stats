import { makeStyles } from '@material-ui/core/styles';

import colors from '../../utils/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    maxHeight: '100vh',
    color: colors.white,
  },
  card: {
    padding: '20px',
    paddingTop: '140px',
    maxWidth: '500px',
  },
  bodyText: {
    paddingTop: '24px',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
  },
  whiteIcon: {
    color: colors.white,
  },
  blackIcon: {
    color: colors.black,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10vh',
  },
});

export default useStyles;
