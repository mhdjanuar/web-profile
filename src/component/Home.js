import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Collapse, 
  Grow,
  List, 
  ListItem, 
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import Typed from 'react-typed';
import image from '../assets/puncak.jpg';
import image2 from '../assets/plant1.jpg';
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    backgroundPosition: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   backgroundImage: `url(${image2})`,
    // }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-30px',
  },
  title: {
    color: '#FFF',
    fontFamily: 'monospace',
    fontWeight: 'bold'
  },
  wrapSkills: {
    display: 'flex',
    width: 0,
  },
  wrapCollapseInner: {
    margin: '10vh',
    [theme.breakpoints.down('xs')]: {
      margin: '2vh',
    }
  }
}));

const iconStyle = {
  fontSize: '25px',
  color: '#FFF',
}


const Home = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(prev => !prev);
  }, [])

  return (
    <div name={'home'} className={classes.root} id={'home'}>
      <Collapse
          in={checked}
          {...(checked ? { timeout: 3000 } : {})}
          classes={{wrapperInner: classes.wrapCollapseInner}}
      >
        <p className={classes.title} style={{fontSize: '3rem'}}>
          Muhammad Januar
        </p>
        <div className={classes.container}>
          <p className={classes.title} style={{fontSize: '1.5rem', marginRight: 5}}>I'm</p>
          <Typed
            className={classes.title}
            style={{fontSize: '1.5rem'}}
            strings={['Frontend Developer']}
            typeSpeed={100}
            loop
          />
        </div>
        <List className={classes.wrapSkills}>
          <ListItem 
              style={{paddingRight: '40px', 
              paddingLeft: '0px'}} 
              button 
              component="a" 
              href="https://web.facebook.com/profile.php?id=100004092512527">
                <i style={iconStyle} class="devicon-facebook-plain"></i>
            </ListItem>
            <ListItem 
              style={{paddingRight: '40px'}}
              button 
              component="a" 
              href="https://www.linkedin.com/in/muhammad-januar-6186a4188/"
            >
                <i style={iconStyle} class="devicon-linkedin-plain"></i>
            </ListItem>
            <ListItem 
              style={{paddingRight: '40px'}}
              button 
              component="a" 
              href="https://github.com/mhdjanuar"
            >
                <i style={iconStyle} class="devicon-github-original"></i>
            </ListItem>
            <ListItem 
              style={{paddingRight: '40px'}}
              button 
              component="a" 
              href="https://www.instagram.com/mhd_januar17/"
            >
                <InstagramIcon style={iconStyle} />
            </ListItem>
        </List>
      </Collapse>
    </div>
  );
}

export default Home;
