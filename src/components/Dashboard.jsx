import React from 'react'
import style from './colors.module.css'
import bal from './pics/IMG_20231007_153453_272.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GroupIcon from '@mui/icons-material/Group';
import EuroIcon from '@mui/icons-material/Euro';
import VerifiedIcon from '@mui/icons-material/Verified';
import HelpIcon from '@mui/icons-material/Help';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className={style.dashboard}>
      <section className={style.dash}>
       <li> <DashboardIcon/></li>
       <li>Dashboard</li>
        
      </section>
       <section className={style.dashlist}>
        <section className={style.list}>
        <div className={style.logo1}>
         <section className={style.brand}><DashboardIcon/></section>
         <section className={style.dat}>Dashboard</section>
         <section className={style.sym}><ArrowForwardIosIcon/></section>
        </div>
        <div className={style.logo}>
        <section className={style.brand}><Inventory2OutlinedIcon/></section>
         <section className={style.dat}>Product</section>
         <section className={style.sym}><ArrowForwardIosIcon/></section>
        </div>
        <div className={style.logo}>
        <section className={style.brand}><GroupIcon/></section>
         <section className={style.dat}>Customers</section>
         <section className={style.sym}><ArrowForwardIosIcon/></section>
        </div>
        <div className={style.logo}>
        <section className={style.brand}><EuroIcon/></section>
         <section className={style.dat}>Income</section>
         <section className={style.sym}><ArrowForwardIosIcon/></section>
        </div>
        <div className={style.logo}>
        <section className={style.brand}><VerifiedIcon/></section>
         <section className={style.dat}>Promote</section>
         <section className={style.sym}><ArrowForwardIosIcon/></section>
        </div>
        <div className={style.logo}>
        <section className={style.brand}><HelpIcon/></section>
         <section className={style.dat}>Help</section>
         <section className={style.sym}><ArrowForwardIosIcon/></section>
        </div>
        </section>
       </section>
       <section className={style.profile}>
        <div className={style.prof}>
          <img src={bal} alt="" />
        </div>
        <div className={style.ab}>
         <p> Baloji</p>
          <p>Project Manager</p>
        </div>
       </section>
       
    </div>
  )
}

export default Dashboard