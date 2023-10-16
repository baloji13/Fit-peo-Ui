import React from 'react'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import style from './colors.module.css'
import Overview from './Overview'
const Main = () => {
  return (
    <div className={style.mainpage}>
           <Header/>
           <Content/>
           <Overview/>
           <Footer/>
          
    </div>
  )
}

export default Main