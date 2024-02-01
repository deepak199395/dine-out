import React from 'react'
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center",bgcolor:"black",color:"white",p:2}}>
    <Box 
       sx={{my:3 , 
       "& svg":{
        fontSize:"30px",
        cursor:"pointer",
        mr:2
    },
    "& svg:hover":{
      color:"goldenrod",
      transform:"translate(5px)",
      transition:"all 400ms",
    }
    }}>
        <InstagramIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        <YouTubeIcon/>
         <GitHubIcon/>
    </Box>
        <Typography variant='h6' sx={{"@media(max-width:600px)":{
        fontSize:'1rem'
        }}}>
        All Right reseved &copy; dev_Deepak
        </Typography>
    </Box>
    </>
  )
}

export default Footer
