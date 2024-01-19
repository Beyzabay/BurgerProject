import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint, magnam, voluptatum vero reprehenderit consequuntur necessitatibus modi repellat, nulla accusantium illo beatae assumenda praesentium reiciendis est facere culpa molestiae blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptates autem inventore ipsum ut modi debitis adipisci est cum aspernatur, mollitia soluta consectetur, animi impedit excepturi. Quod minima voluptate perferendis?</p>
      </div>
    </div>
  )
}
