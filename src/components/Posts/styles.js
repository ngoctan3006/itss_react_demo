import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  empty: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0 auto',
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
