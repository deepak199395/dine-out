import React from 'react'
import Layout from '../Componants/Layout/Layout'
import "../Styles/HomeStyle.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import banner from "../Image/banner.jpeg"
const Home = () => {
  return (
    <>
        <Layout>
        <div className='home' style={{backgroundImage:`url(${banner})`}}>
         <div className="headerContainer">
          <h1>DineOut</h1>
          <p>best food in india</p>
          <Link to="/Menu">
          <Button>Oder Now</Button>
          </Link>
          
         </div>
        </div>
        </Layout>
    </>
  )
}

export default Home
