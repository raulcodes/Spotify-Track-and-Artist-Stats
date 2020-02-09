import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  container: {
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.white,
    padding: '50px',
    width: '50%',
  },
  cardContent: {
    paddingLeft: '48px',
  },
});

export default useStyles;