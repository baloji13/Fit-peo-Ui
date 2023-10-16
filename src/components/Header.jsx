import React from 'react'
import style from './colors.module.css'
const Header = () => {
  return (
    <div className={style.head}>
        <div className={style.headcontainer}>
        <section className={style.headern}>Hello Shahrukh</section>
        <section><input type="text" placeholder='search'/></section>
        </div>
    </div>
  )
}

export default Header