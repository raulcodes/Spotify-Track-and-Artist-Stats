import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    color: colors.white,
  },
  card: {
    paddingTop: '4vh',
  }
});

export default useStyles;