import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../src/component/Sidebar';
import Home from '../src/component/Home';
import Profile from '../src/component/Profile';
import Resume from '../src/component/Resume';
import Contact from '../src/component/Contact';
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function App() {
  const classes = useStyles();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={classes.root}>
      <Sidebar />
      <Home />
      <Profile />
      <Resume />
      <Contact />
      {/* <div name='skills' style={{backgroundColor: 'red',height: '100vh', padding: '20vh'}}>
        <div data-aos="fade-up" style={{backgroundColor: 'white', height: '300px', width: '50%'}}  />
      </div> */}
    </div>
  );
}

export default App;
