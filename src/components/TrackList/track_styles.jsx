import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  card: {
    marginTop: '24px',
    padding: '24px',
    backgroundColor: colors.black,
  },
  divider: {
    backgroundColor: colors.white,
  },
  track: {
    color: colors.white,
    fontFamily: 'lust-display',
    fontStyle: 'italic',
  },
  number: {
    color: colors.white,
    fontFamily: 'lust-script-display',
    fontStyle: 'normal',
    fontWeight: 400,
    maxWidth: '50px'
  },
  avatar: {
    width: '75px',
    height: '75px',
    marginRight: '20px',
    marginTop: '30px',
    marginBottom: '30px',
  }
});

export default useStyles;