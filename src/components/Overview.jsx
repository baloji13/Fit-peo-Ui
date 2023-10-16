import React from 'react'
import style from './colors.module.css'
const Overview = () => {
  return (
    <div className={style.overview}>
        <div className={style.graph}>
        <section className={style.chart}>
          <div className={style.over}>
            <section className={style.heading}><h3>Overview</h3><p>Monthley Earning</p></section>
            <section className={style.cap}><select name="" id=""><option value=""><p>Quaterley</p></option></select></section>
          </div>
          <div className={style.up}>
            <section className={style.jan}></section>
            <section className={style.feb}></section>
            <section className={style.mar}></section>
            <section className={style.apr}></section>
            <section className={style.may}></section>
            <section className={style.jun}></section>
            <section className={style.jul}></section>
            <section className={style.aug}></section>
            <section className={style.sep}></section>
            <section className={style.oct}></section>
            <section className={style.nov}></section>
            <section className={style.dec}></section>
          </div>
          <div className={style.months}>
          <div>Jan</div>
          <div>Feb</div>
          <div>Mar</div>
          <div>Apr</div>
          <div>May</div>
          <div>Jun</div>
          <div>Jul</div>
          <div>Aug</div>
          <div>Sep</div>
          <div>Oct</div>
          <div>Nov</div>
          <div>Dec</div>
          </div>
        </section>
        <section className={style.flow}>
          <section className={style.note}><section>Customers</section>
          <section><p>Customers That Buy Products</p></section></section>
          <section className={style.num}>
            <section className={style.val}>
            <h5>65%</h5>
            <h6>Total New</h6>
            <h6>Customers</h6>
            </section>
          </section>
        </section>
        </div>
    </div>
  )
}

export default Overview