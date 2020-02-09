import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    paddingTop: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#2B2B2B',
    padding: '50px',
    width: '50%',
  },
  cardContent: {
    paddingLeft: '48px',
  },
});

export default useStyles;