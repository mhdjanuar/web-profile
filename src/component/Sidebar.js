import React,{useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Drawer, IconButton, useTheme, useMediaQuery} from '@material-ui/core';
import List from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75%',
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    padding: 15,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      width: '150px',
    }
  },
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  paperAnchorDockedLeft: {
    borderRight: 0,
  },
  primary: {
      color: '#FFF',
  },
  iconContainer: {
    backgroundColor: '#FFF',
  },
  listRoot: {
    color: 'black',
    "& > .active .listItem": {
      backgroundColor: '#ff6f00',
      color: 'white'
    },
    "& > .active .listItem .listItemIcon": {
      color: 'white'
    },
  }
}));

const ListItem = withStyles((theme) => ({
  button: {
    backgroundColor: '#f2f3f5',
    borderRadius: '100px',
    padding: '15px',
    marginBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      width: '120px',
    },
    "&:hover": {
      backgroundColor: "#ff6f00",
      color: '#FFF',
      [theme.breakpoints.up('sm')]: {
        width: '150px',
      },
    },
    "&:hover > .listItemIcon": {
      color: 'white'
    },
  },
  selected: {
    backgroundColor: '#ff8f00'
  }
}))(MuiListItem)


const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatches = useMediaQuery(theme.breakpoints.up('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSelected, setisSelected] = useState(null);

  const LinkWithListItem = (props) => {
    return (
        <Link
          activeClass="active"
          to={props.to}
          onClick={props.onClick}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          <ListItem className="listItem" button>
                <ListItemIcon className="listItemIcon" style={{minWidth: 0}}>
                    {props.icon}
                </ListItemIcon>
                <ListItemText style={{paddingLeft: 15}} primary={props.name} />
          </ListItem>
        </Link>
    );
  }

  return (
    <>
    {!isMatches && (
      <MenuIcon 
        fontSize="large" 
        style={{ color: '#ff6f00', position:'fixed', right: '10px', top: '10px', zIndex: 1 }} 
        onClick={() => setDrawerOpen(!drawerOpen)}
      />
    )}
    <Drawer open={isMatches ? isMatches : drawerOpen} classes={{paper: classes.root, paperAnchorDockedLeft: classes.paperAnchorDockedLeft}} variant={'persistent'}>
        <List component="nav" classes={{root: classes.listRoot}} aria-label="main mailbox folders">
          <LinkWithListItem 
            to='home' 
            name='Home' 
            onClick={() => {
              setDrawerOpen(!drawerOpen)
            }}
            icon={<HomeIcon />}
          />
          <LinkWithListItem 
            to='profile' 
            name='Profile' 
            onClick={() => {
              setDrawerOpen(!drawerOpen)
            }}
            icon={<AccountBoxIcon />}
          />
          <LinkWithListItem 
            to='resume' 
            name='Resume'
            onClick={() => {
              setDrawerOpen(!drawerOpen)
            }}
            icon={<DescriptionIcon />}
          />
          <LinkWithListItem 
            to='contact' 
            name='Contact'
            onClick={() => {
              setDrawerOpen(!drawerOpen)
            }}
            icon={<DescriptionIcon />}
          />
        </List>
    </Drawer>
    </>
  );
}

export default Sidebar;
