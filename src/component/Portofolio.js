import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import ImageGallery from './ImageGallery';
import {portofolioData} from '../data/portofolio';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#FFF',
    paddingLeft: '20vh',
    [theme.breakpoints.down('xs')]: {
        padding: '0px'
    }
  },
  titlePage: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.54)', 
    padding: '10px'
  },
  gridList: {
    width: '100%',
    // height: 400,
  },
}));

const Portofolio = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(false);
  const [sliderData, setIsSliderData] = useState([]);

  return (
    <div name={'portofolio'} className={classes.root}>
        <h1 className={classes.titlePage}>PORTOFOLIO</h1>
        <GridList data-aos="fade-up" data-aos-duration="1000" cellHeight={300} className={classes.gridList} cols={12}>
            {portofolioData.map((item, index) => (
              <GridListTile 
                onClick={() => {
                  setIsSliderData(item.slides)
                  setIsOpen(true)
                }} 
                key={index} 
                cols={!matches ? item.cols : 6}
              >
                <img src={item.thumbnail} />
                <GridListTileBar
                    title={item.title}
                    subtitle={<span>by: mhdjanuar</span>}
                    actionIcon={
                        <IconButton style={{color: '#FFF'}}>
                          <RemoveRedEyeIcon />
                        </IconButton>
                      }
                />
             </GridListTile>
            ))}
       </GridList>
       <ImageGallery slides={sliderData} isOpen={isOpen} isClose={() => {
         setIsOpen(false)
       }} />
    </div>
  );
}

export default Portofolio;
