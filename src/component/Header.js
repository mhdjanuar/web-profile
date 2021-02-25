import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    position: 'fixed',
    padding: 10,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         <p style={{color: 'white'}}>MhdJanuar</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
