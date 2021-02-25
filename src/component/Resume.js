import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Collapse, 
    Grid,
    Slide
} from '@material-ui/core';
import useWindowPosition from '../utils/useWindowPosisition';
import TimeLine from './TimeLine';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  contain: {
    paddingLeft: '20vh',
    [theme.breakpoints.down('xs')]: {
        paddingLeft: '0vh'
    }
  },
  title: {
      paddingLeft: '40px',
      color: 'rgba(0, 0, 0, 0.54)'
  }
}));

const Resume = () => {
  const classes = useStyles();
  const checked = useWindowPosition('profile');

  const education = [
    {
      title: 'SMK NEGERI 24 JAKARTA',
      rangeDate: '2016-2019',
      content: 'School is first time i know programing , i learning PHP, JAVA, C# and other language programing'
    }
  ]

  const experience = [
    {
      title: 'PT.BARITO INTEGRA TEKNOLOGI',
      rangeDate: '2019',
      content: 'i working in barito teknologi, in this place my position is backend developer, i using JAVA, Docker for make microservices'
    },
    {
      title: 'PT.IDE DUA SEN',
      rangeDate: '2019-2020',
      content: 'ide dua sen, in this place my posisition is frontend developer , i make website with VUE.js'
    },
    {
      title: 'FREELANCER',
      rangeDate: '2020-2021',
      content: 'android mobile, when i to be freelancer i getting job make aplication android , i using REACT NATIVE for make android'
    }
  ]

  return (
    <div name={'resume'} className={classes.root}>
        <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0.54)'}}>MY RESUME</h1>
            <div data-aos="fade-up" data-aos-duration="1000" className={classes.contain}>
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={6}>
                        <h1 className={classes.title}>Education</h1>
                        <TimeLine data={education} />  
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <h1 className={classes.title}>Experience</h1>
                        <TimeLine data={experience} />  
                    </Grid>
                </Grid>
            </div>
    </div>
  );
}

export default Resume;
