import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, 
    useTheme, 
    useMediaQuery, 
    List, 
    ListItem, 
    ListItemText,
    ListItemIcon,
    Collapse,
} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import CakeIcon from '@material-ui/icons/Cake';
import DateRange from '@material-ui/icons/DateRange';
import LocationCity from '@material-ui/icons/LocationCity';
import CastForEducation from '@material-ui/icons/CastForEducation';
import useWindowPosition from '../utils/useWindowPosisition';
import profilePhoto from '../assets/profile.jpg';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FFF',
      minHeight: '110vh',
    },
    contain: {
        paddingLeft: '20vh',
        [theme.breakpoints.down('xs')]: {
            padding: '16px'
        }
    },
    wrapSkills: {
        display: 'flex',
        width: 0,
    },
    textContent: {
        textAlign: 'center',
        width: '85%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        }
    }
  }));

const iconStyle = {
    fontSize: '50px',
    color: 'rgba(0, 0, 0, 0.54)',
}

const Profile = () => {
  const classes = useStyles();
  const checked = useWindowPosition('home');

  return (
    <div name='profile' className={classes.root} id="profile">
        <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.54)'}}>ABOUT</h1>
        <div data-aos="fade-up" data-aos-duration="1000" className={classes.contain}>
            <p className={classes.textContent}>Hello , my name is januar i am frontend developer. i make web and android. i liked coding because i love make design website or android can using for peoples</p>
            <Grid style={{padding: '20px'}} container spacing={0}>
                <Grid item xs={12} lg={4}>
                 <img 
                    src={profilePhoto} 
                    alt="Paris" 
                    width="300" 
                    height="400" 
                    style={{objectFit: 'cover'}}
                 />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <h1 style={{paddingLeft: '0px', color: '#ffa040'}}>Mobile & Web Developer</h1>
                    <List>
                        <ListItem >
                            <ListItemIcon>
                                <CakeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Birthday" secondary="17 Januari 2001" />
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <DateRange />
                            </ListItemIcon>
                            <ListItemText primary="Age" secondary="20"/>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <LocationCity />
                            </ListItemIcon>
                            <ListItemText primary="City" secondary="Indonesia, DKI Jakarta, Jakarta Timur"/>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon>
                                <CastForEducation />
                            </ListItemIcon>
                            <ListItemText primary="Education" secondary="SMK"/>
                        </ListItem>
                    </List>
                </Grid>
                <Grid data-aos="fade-right" item xs={12}>
                    <h1 style={{color: 'rgba(0, 0, 0, 0.54)'}}>MY SKILLS</h1>
                    <List className={classes.wrapSkills}>
                        <ListItem style={{paddingRight: '40px'}}>
                            <i style={iconStyle} class="devicon-html5-plain"></i>
                        </ListItem>
                        <ListItem style={{paddingRight: '40px'}}>
                            <i style={iconStyle} class="devicon-css3-plain"></i>
                        </ListItem>
                        <ListItem style={{paddingRight: '40px'}}>
                            <i style={iconStyle} class="devicon-javascript-plain"></i>
                        </ListItem>
                        <ListItem style={{paddingRight: '40px'}}>
                            <i style={iconStyle} class="devicon-react-original"></i>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}

export default Profile;