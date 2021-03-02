import React,{useEffect, useState} from 'react';
import {
  IconButton
} from '@material-ui/core';
import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRounded from '@material-ui/icons/ArrowForwardRounded';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Modal from 'react-modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: 0, // Disable browser on-focus borders
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  wrapSlider: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '500px',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      objectFit: 'contain',
      width: '100%',
      height: '500px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    [theme.breakpoints.down('xs')]: {
      objectFit: 'contain',
      width: '100%',
      height: '450px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  },
  rightArrow: {
    position: 'absolute',
    right: '8px',
    zIndex: 10,
  },
  leftArrow: {
    position: 'absolute',
    left: '8px',
    zIndex: 10,
  },
  modal: {
    position: 'absolute',
    border: '0px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    overflow: 'none',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    inset: 'initial',
  },
  overlayModal: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '20vh'
  },
  slide: {
    opacity: 0,
    transitionDuration: '1s ease'
  },
  slideActive: {
    opacity: 1,
    transitionDuration: '1s',
    transform: 'scale(1.08)'
  }
}));

const ImageGallery = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const [current, setCurrent] = useState(0);
  const sliderData = props.slides;
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const handleClose = () => {
    props.isClose();
    setCurrent(0);       
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={handleClose}
      contentLabel="Example Modal"
      className={classes.modal}
      style={{
        overlay: {
          position: 'fixed',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: !matches ? '20vh' : '0vh',
        },
      }}
    >
        <div className={classes.wrapSlider}>
          <IconButton className={classes.leftArrow}  onClick={() => prevSlide()}>
            <ArrowBackRounded />
          </IconButton>
          <IconButton className={classes.rightArrow}  onClick={() => nextSlide()}>
            <ArrowForwardRounded />
          </IconButton>
          {sliderData.map((item, index) => {
            return (
              <div className={index === current ? classes.slideActive : classes.slide} key={index}>
                {index === current && <img src={item.image} className={classes.image}/>}
              </div>
            )
          })}
        </div>
     </Modal>
  );
}

export default ImageGallery;