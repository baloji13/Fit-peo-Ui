import React from 'react'
import style from './components/colors.module.css'
import Dashboard from './components/Dashboard'
import Main from './components/Main'


const App = () => {
  return (
    <div className={style.fitpeo}>
        <Dashboard/>
        
        <Main/>
        
    </div>
  )
}

export default App