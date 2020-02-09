import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  track: {
    color: colors.black,
    fontFamily: 'lust-display',
    fontStyle: 'italic',
  },
  number: {
    color: colors.black,
    fontFamily: 'lust-script-display',
    fontStyle: 'normal',
    fontWeight: 400,
    maxWidth: '50px'
  },
});

export default useStyles;