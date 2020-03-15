import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  number: {
    paddingRight: '10px',
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: '20px',
    marginTop: '10px',
    marginBottom: '10px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
  contentText: {
    color: colors.white,
  },
  divider: {
    backgroundColor: colors.white,
  }
});

export default useStyles;