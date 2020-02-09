import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  container: {
    paddingTop: '100px',
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
  title: {
    color: colors.black,
    fontFamily: 'lust-script-display',
    fontStyle: 'normal',
    fontWeight: 400,
  },
  bodyText: {
    color: colors.black,
    fontFamily: 'lust-display',
    fontStyle: 'italic',
    fontWeight: 400,
    paddingTop: '24px',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    color: colors.black,
    borderColor: colors.black,
    fontFamily: 'lust-display',
    fontStyle: 'italic',
    textTransform: 'none',
  },
});

export default useStyles;