import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  container: {
    paddingTop: '24px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.white,
    width: '50%',
  },
});

export default useStyles;