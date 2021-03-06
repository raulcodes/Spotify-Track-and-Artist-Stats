import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  number: {
    paddingRight: '5px',
  },
  avatar: {
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
  },
  listContainer: {
    border: `1.5px solid ${colors.white}`,
    borderRadius: '5px',
    maxHeight: '55vh',
    overflowY: 'scroll',
  },
});

export default useStyles;
