import MenuItem from '../components/MenuItem'
import React from 'react'
import {Data} from '../helpers/Data'
import '../styles/Menu.css'

export const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Burgerlerimiz</h1>
        <div className='menuList'>
          {Data.map((menuCard,key) => {
            return(
            <MenuItem
            key={key}
            image = {menuCard.image}
            name = {menuCard.name}
            content = {menuCard.content}
            price={menuCard.price}
            />
            )
          })
          }
        </div>    
    </div>
  )
}
