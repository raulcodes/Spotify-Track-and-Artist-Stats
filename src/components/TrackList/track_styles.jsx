import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    marginTop: '24px',
    padding: '24px',
  },
  number: {
    maxWidth: '100px'
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: '20px',
    marginTop: '30px',
    marginBottom: '30px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  }
});

export default useStyles;