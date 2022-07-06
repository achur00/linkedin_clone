import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css" 


function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className="header__icon" />}
        {avatar && <Avatar className='header__icon' src={avatar} />}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption