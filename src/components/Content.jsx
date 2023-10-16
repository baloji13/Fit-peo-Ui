import React from 'react'
import style from './colors.module.css'
import ArticleIcon from '@mui/icons-material/Article';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Content = () => {
  return (
    <div className={style.content}>
        <section className={style.details}>
            <div id={style.earning1}>
              <section className={style.icon1}><CurrencyExchangeIcon/></section>
              <section className={style.data1}> <p>Earning</p>
              <h3>$198k</h3>
              <ArrowUpwardIcon/><p><span>37.8%</span>this month</p>
                </section>
             </div>
            <div id={style.earning1}>
            <section className={style.icon2}><ArticleIcon/></section>
              <section className={style.data2}> <p>Orders</p>
              <h3>$198k</h3>
              <ArrowDownwardIcon/><p><span1>2%</span1>this month</p>
                </section>
                </div>
            <div id={style.earning1}>
            <section className={style.icon3}><LocalAtmIcon/></section>
              <section className={style.data3}> <p>Balance</p>
              <h3>$198k</h3>
              <ArrowDownwardIcon/><p><span1>2%</span1>this month</p>
                </section></div>
            <div id={style.earning1}>
            <section className={style.icon4}><ShoppingBagIcon/></section>
              <section className={style.data4}> <p>Total Sales</p>
              <h3>$198k</h3>
              <section ><ArrowUpwardIcon/><p><span>11%</span>this month</p></section>
                </section></div>
        </section>
       
       
    </div>
  )
}

export default Content