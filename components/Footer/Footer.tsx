'use client';

import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import IconLink from '../IconLink/IconLink';
import backgroundFooter from '../../public/backgroundFooter.svg';
import backgroundFooter2 from '../../public/backgroundFooter2.svg'; 
import zkEmailFooter from '../../public/zkEmailFooter.svg'; 
import Link from 'next/link';
import DiscordIcon from '../DiscordIcon/DiscordIcon'; // Import the DiscordIcon component
import { animate, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Adjust the duration to slow down the animation
        ease: 'easeInOut' // Optional, you can change the easing function as needed
      }
    }
  };
  
  const backgrounds = [backgroundFooter, backgroundFooter2];
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground(prev => (prev + 1) % backgrounds.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: `url(${backgrounds[currentBackground].src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image', // smooth transition for background image change
        backgroundColor: 'white', // ensure background color doesn't override background image
      }}
    >
      <Box
        component="footer"
        sx={{
          pt: { xs: 16, sm: 28 },
          textAlign: 'center',
          marginTop: 'auto',
          backgroundColor: 'transparent', // ensure background color doesn't override background image
          fontFamily: ''
        }}
      >
        <Box
          sx={{
            px: {
              xs: 3,
              md: 6,
            },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          {/* FOOTER TAGLINE */}
          <Grid container spacing={2}>
            <Grid item xs={4} justifyContent="flex-start">
              <Typography color="white" textAlign="left" sx={{fontSize:{xs:"10px", sm:"15px", md:"20px"}}}>
                transfer truth with the freedom of privacy
              </Typography>
            </Grid>

            {/* FOOTER SITE LINKS */}
            <Grid item xs={8} justifyContent="flex-end">
              <Grid container spacing={6} justifyContent="flex-end">
                <Grid item>
                  <Typography variant="h6" component="h3" color="white" fontWeight="bold" pb={2} textAlign="center">
                    DEVELOPERS
                  </Typography>
                  <Grid container direction="column" spacing={1} textAlign="center" color="text.secondary">
                    <Grid item>
                      <Link href="https://zkemail.gitbook.io/zk-email" color="inherit" target="_blank">
                        <Typography variant='footerLink'>
                          Docs
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/projects" target="_blank" color="inherit">
                        <Typography variant='footerLink'>
                          Projects
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography variant="h6" component="h3" color="white" fontWeight="bold" pb={2} textAlign="center">
                    COMMUNITY
                  </Typography>
                  <Grid container direction="column" spacing={1} textAlign="center" color="text.secondary">
                    <Grid item>
                      <Link href="/blog" target="_blank" color="inherit" >
                        <Typography variant='footerLink'>
                          Blog
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/projects" target="_blank" color="inherit">
                        <Typography variant='footerLink'>
                          Learn
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/projects" target="_blank" color="inherit">
                        <Typography variant='footerLink'>
                          Partner
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>


                {/* FOOTER SOCIAL ICONS  */}
                <Grid item>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                      <IconLink target={false} href="https://twitter.com/zkemail?lang=en" IconComponent={XIcon} />
                    </Grid>
                    <Grid item>
                      <IconLink target={false} href="https://t.me/zkemail" IconComponent={TelegramIcon} />
                    </Grid>
                    <Grid item>
                      <IconLink target={false} href="https://discord.com/invite/yourlink" IconComponent={DiscordIcon} />
                    </Grid>
                    <Grid item>
                      <IconLink target={false} href="https://www.youtube.com/yourchannel" IconComponent={YouTubeIcon} />
                    </Grid>
                    <Grid item>
                      <IconLink target={false} href="https://github.com/zkemail" IconComponent={GitHubIcon} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          {/* BOTTOM FOOTER ZK EMAIL BIG TEXT*/}
          <Box sx={{ marginTop: 'auto' }}>
            <motion.div
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{once: true}}
            >
              <Image
                src={zkEmailFooter}
                alt='checkbox'
                className='w-full h-full fill-white pt-24'
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
