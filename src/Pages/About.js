import React from "react";
import Layout from "../Componants/Layout/Layout";
import "../Styles/About.css";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my:14,
          textAlign: "center",
          "& h4": {
            fontWeight: "bold",
            my:2,
            fontSize:'2.5rem',
            padding:2
          },
          "& p": {
            textAlign: "justify",
            padding: 2,
          },
          "@media(max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:'1.3rem'
            }
          }
        }}
      >
        <Typography variant="h4">Welcome To DineOut</Typography>
        <p>
          "Mitsu Cuisine Restaurant is a Chinese Restaurant Located In Thane
          West and Also We Serve Many Flavored Thick Milk Shakes . Visit Our
          Restaurant For Thick Milk Shakes and Chinese Cuisine." Restaurant in
          Thane West, Khopat, Thane West, Thane Restaurant in ThaneChinese
          Restaurant in Thane West, Khopat, Thane West, ThaneSandwich Restaurant
          in Thane West, Khopat, Thane West, ThaneFast Food Restaurant in Thane
          West, Khopat, Thane West, ThaneDesserts Restaurant in Thane West,
          Khopat, Thane West, ThaneRestaurant in Thane West, Khopat, Thane West,
          ThaneMitsu Cuisine, Thane West, Khopat, Thane West Mitsu Cuisine,
          Thane West, Khopat, Thane West Deals Mitsu Cuisine, Thane West,
          Khopat, Thane West, Thane
        </p>
        <br />
        <p>
          Mitsu Cuisine, Thane West, Thane, Chinese, Sandwich, Fast Food, Get
          Restaurant Menu, Address, Contact Number, Photos, Services Offered,
          Maps of Mitsu ... Mitsu Cuisine. Chinese Restaurant in Thane West.
          Open today until 23:00. Get ... Thane, Maharashtra 400607. India.
          Opening Hours. Mon: 11:00 am – 11:00 pm. Tue: ...
        </p>
      </Box>
    </Layout>
  );
};

export default About;
