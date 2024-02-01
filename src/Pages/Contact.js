import React from "react";
import Layout from "../Componants/Layout/Layout";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Layout>
        <Box sx={{ my:16,textAlign:"center" ,"& h4":{
          fontWeight:"bold"
        }}}>
          <Typography variant="h4">ContactUs</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consequuntur neque nulla nihil quis veniam asperiores, facilis
            laboriosam pariatur aliquam suscipit. Adipisci animi aperiam soluta
            vero quod facere omnis officia.
          </p>
        </Box>
        <Box sx={{m:3,width:"600px","@media(max-width:600px)":{
          width:"300px"
        }}}>
          <TableContainer component={Paper}>
          <Table aria-label="contact table">
          <TableHead>
          <TableRow>
              <TableCell sx={{bgcolor:"black" ,color:"white",fontSize:30}} align="center">Contact Details</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <SupportAgentIcon sx={{color:"red",pt:1}}/>+91-1800-998-88(TollFree Number)
                </TableCell>
               
              </TableRow>
              <TableRow>
              <TableCell>
                <MailIcon sx={{color:"skyblue",pt:1}}/>help@Dineout.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <PhoneCallbackIcon sx={{color:"Green",pt:1}}/>9988776655
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </TableContainer>
        </Box>
      </Layout>
    </>
  );
};

export default Contact;
