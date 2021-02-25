import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'end',
  },
  timelineContent: {
    flex: 'auto',
  },
  timeLineDot: {
    backgroundColor: 'red',
  }
}));

export default function TimeLine(props) {
  const classes = useStyles();
  const data = props.data;

  return (
    <Timeline className={classes.root}>
      {data.map(item => (
       <TimelineItem>
          <TimelineSeparator>
            <TimelineDot style={{backgroundColor: '#ff6f00'}} />
            <TimelineConnector style={{backgroundColor: '#ff6f00'}} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent} children={
          <>
           <h3 style={{color: '#ffa040'}}>{item.title}</h3>
           <h5 style={{color: '#707070'}}>{item.rangeDate}</h5>
           <p style={{color: '#707070'}}>{item.content}</p>
          </>
         } />
       </TimelineItem>
      ))}
    </Timeline>
  );
}