import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  text: {    
    color: colors.white,
    fontFamily: 'lust-display',
    fontStyle: 'italic',
  },
  selectCard: {
    padding: '24px',
    backgroundColor: colors.black,
  }
});

export default useStyles;