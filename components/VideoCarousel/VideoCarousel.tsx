'use client'
import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid, useMediaQuery, useTheme, Stack } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';
import CustomButton from '../CustomButton/CustomButton';

const videos = [
  { title: "ZK Email: Novel ZK Applications Unlocked by Portable Provenance", where: "ZK Summit 11", url: "https://www.youtube.com/embed/rZTNzvLXB14?si=2NOAwXQYalqGYTGE", date: "2024/04/19", thumbnail: "https://img.youtube.com/vi/rZTNzvLXB14/0.jpg" },
  { title: "ZK Email: Email Wallet and Identity Attestations", where: "Proof Singularity Denver", url: "https://www.youtube.com/embed/GEWuGtsjATw?si=ApokIEW2h8KYYAYO", date: "2024/03/15", thumbnail: "https://img.youtube.com/vi/GEWuGtsjATw/0.jpg" },
  { title: "ZK Email: Email Wallets and Provenant Identity", where: "PROGCRYPTO", url: "https://www.youtube.com/embed/qUYBja0glio?si=MuVP2sgVo9y7egLd", date: "2024/01/26", thumbnail: "https://img.youtube.com/vi/qUYBja0glio/0.jpg" },
  { title: "Ethcon Korea ZK Email Mention", where: "Ethcon Korea", url: "https://www.youtube.com/embed/gsrtxq0xYxs?si=twKpt5bfFzmZVi21&amp;start=939", date: "2023/11/15", thumbnail: "https://img.youtube.com/vi/gsrtxq0xYxs/0.jpg" },
  { title: "Universal Recovery: A Social Recovery Solution Utilizes ZK-Email", where: "Clave", url: "https://www.youtube.com/embed/iMAaHEYyuxA?si=aUdeSJ60Dv57TjQI", date: "2023/01/26", thumbnail: "https://img.youtube.com/vi/iMAaHEYyuxA/0.jpg" },
  { title: "ZK for web2 interop with zkLogin & ZK Email", where: "ZK Podcast", url: "https://www.youtube.com/embed/vFYUWRks7Kg?si=CDU7Ks4Bq5WgngAN", date: "2023/12/06", thumbnail: "https://img.youtube.com/vi/vFYUWRks7Kg/0.jpg" },
  { title: "Zuconnect 2023 ZK Day: ZK Email", where: "Zuconnect", url: "https://www.youtube.com/embed/3jCKdxQ9Pfw?si=Q4jVStBCmntXnOfO", date: "2023/12/03", thumbnail: "https://img.youtube.com/vi/3jCKdxQ9Pfw/0.jpg" },  
  { title: "zkemail: Decentralized ID Verification on Chain Without Servers", where: "Devcon", url: "https://www.youtube.com/embed/sPCHiUT3TmA?si=TiNLxkoj9n-0NbDl", date: "2022/11/16",
    thumbnail: "https://img.youtube.com/vi/sPCHiUT3TmA/0.jpg" },
  ];
  
  const VideoCarousel = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
  
    const getVisibleCards = () => {
      if (isLargeScreen) return 4;
      if (isMediumScreen) return 3;
      return 3;
    };
  
    const visibleCards = getVisibleCards();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const next = () => {
      if (currentIndex < videos.length - visibleCards) setCurrentIndex(currentIndex + visibleCards);
    };
  
    const previous = () => {
      if (currentIndex > 0) setCurrentIndex(currentIndex - visibleCards);
    };
  
    return (
      <Box className="relative w-full" sx={{ height: {xs:'900px',md:'100%'}, paddingX: {xs:'10px', md: '30px'} }}>
        <Grid container spacing={2} className="overflowX-hidden">
          {videos.slice(currentIndex, currentIndex + visibleCards).map((video) => (
            <Grid item xs={12 / visibleCards} key={video.url}>
              <Card 
                className="shadow-md rounded-lg overflow-hidden"
                sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  height: '300px', // Set a fixed height for the card
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover .MuiCardMedia-root': {
                    opacity: 1,
                  },
                  '& .MuiCardMedia-root': {
                    opacity: 0.5,
                    transition: 'opacity 0.3s ease-in-out',
                  },
                  '&:hover .MuiCardContent-root': {
                    transform: 'translateY(150px)', // Slide down to reveal half the height
                    transition: 'transform 0.3s ease-in-out, padding 0.3s ease-in-out',
                    paddingY: '8px', // Adjust padding on hover
                  },
                  '& .MuiCardContent-root': {
                    transform: 'translateY(0)', // Initial position
                    transition: 'transform 0.3s ease-in-out, padding 0.3s ease-in-out',
                    padding: '16px', // Initial padding
                  }
                }}
                onClick={() => window.open(video.url, '_blank')}
              >
                <CardMedia
                  component="img"
                  image={video.thumbnail}
                  title={video.title}
                  sx={{ width: '100%', height:'50%', position: 'absolute', top: 0, left: 0 }}
                  className="MuiCardMedia-root"
                />
                <CardContent 
                  className="p-4 grid grid-cols-2 bg-black relative"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '100%', // Start with full height
                    zIndex: 2,
                    background: 'black',
                  }}
                >
                  <Stack direction="row" alignItems='center' sx={{ paddingTop: "16px", paddingY:'12px', justifyItems:'center'}}>
                    <FiberManualRecord sx={{ color: theme.palette.secondary.main, fontSize: '10px', position: 'relative' }} />
                    <Typography sx={{fontSize: {xs:'10px', md:'14px'}, color:'grey',paddingLeft: {xs:'1px', sm:'3px' }}}>Talks</Typography>
                  </Stack>
                  <Typography variant="h5" sx={{ color: 'white', gridColumn: 'span 2', fontSize: {xs:'12px', sm: '14px', md: '15px', lg:'17px'} }}>
                    {video.title}
                  </Typography>
                  <Grid item xs={12} sx={{ gridColumn: 'span 2' }}>
                    <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <Grid item xs={12} sm={8}>
                        <Typography sx={{ color: 'grey', textAlign: {xs:'right', sm:'left'}, fontSize: { xs: '8px', sm: '10px', md: '12px' } }}>
                          {video.where}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Typography sx={{ color: 'grey', textAlign: 'right', fontSize: { xs: '8px', sm: '10px', md: '12px' } }}>
                          {video.date}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box className="flex justify-center space-x-4 mt-12">
          <CustomButton
            buttonLabel='Previous'
            onClick={previous}
            disabled={currentIndex === 0}
            filledIn={currentIndex !== 0}
          />
          <CustomButton
            buttonLabel='Next'
            onClick={next}
            filledIn={!(currentIndex >= videos.length - visibleCards)}
            disabled={currentIndex >= videos.length - visibleCards}
          />
        </Box>
      </Box>
    );
  };
  
  export default VideoCarousel;
  