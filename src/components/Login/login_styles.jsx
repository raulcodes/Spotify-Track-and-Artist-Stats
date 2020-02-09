import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    paddingTop: '100px',
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
  title: {
    color: '#FFF4E8',
    fontFamily: 'lust-script-display',
    fontStyle: 'normal',
    fontWeight: 400,
  },
  bodyText: {
    color: '#FFF4E8',
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
    color: '#FFF4E8',
    borderColor: '#FFF4E8',
    fontFamily: 'lust-display',
    fontStyle: 'italic',
    textTransform: 'none',
  },
});

export default useStyles;