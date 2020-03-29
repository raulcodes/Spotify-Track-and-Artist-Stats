import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    color: colors.white,
    height: '100vh',
  },
  card: {
    paddingTop: '5vh',
    maxHeight: '20vh',
  },
});

export default useStyles;
