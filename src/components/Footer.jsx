import React from 'react'
import style from './colors.module.css'
import img1 from './pics/product1.jpeg'
import img2 from './pics/product2.jpeg'
const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footercontainer}>
                <section className={style.productsell}>
                    <h3>Product Sell</h3>
                    <section className={style.fline1}><input type="text" placeholder='search'/>
                    <select name="" id="" >
                      <option value="" >last 30 days</option>
                    </select></section>
                </section>
                <section className={style.product}>
                   <section className={style.name}><p>Product Name</p></section>
                    <section className={style.fline2}>
                     <p>stock</p>  
                     <p>price</p> 
                     <p>total sales</p>
                    </section>
             
                </section>
                <section className={style.product1}>
                    <section className={style.product1img}>
                      <img src={img1} alt="" />
                      </section>
                    <section className={style.product1about}>
                      <h4>Abstract 3D</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </section>
                    <section className={style.fline3}>
                    <h6>32 in stock</h6>  
                     <h5>$ 45.99</h5> 
                     <h5>20</h5>
                     </section>
                </section>
                <section className={style.product2}>
                <section className={style.product2img}>
                  <img src={img2} alt="" />
                  </section>
                    <section className={style.product2about}>
                      <h4>Sarphens illustration</h4>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </section>
                    <section className={style.fline4}>
                      <h6>32 in stock</h6>  
                     <h5>$ 45.99</h5> 
                     <h5>20</h5></section>
                </section>
            
        </div>
    </div>
  )
}

export default Footer