import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Collapse, 
  Grow,
  List, 
  ListItem, 
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import image from '../assets/plant2.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  root: {
    minHeight: '30vh',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  wrapSkills: {
    display: 'flex',
    paddingLeft: '30px',
  }
});

const iconStyle = {
  fontSize: '25px',
  color: '#FFF',
}

const Contact = () => {
  const classes = useStyles();

  return (
    <div name="contact" className={classes.root}>
      <h1 style={{color: '#FFF'}}>Muhammad Januar</h1>
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
       <p style={{color: '#FFF', fontSize: '10px'}}>©Copyright 2021 All rights reserved | This web is made with  by mhdjanuar</p>
    </div>
  );
}

export default Contact;