import React from 'react';
import './Header.css'

export default ({style}) => {
return(
    <header style={{background: style, transition: '0.5s'}}>
        <div className='header--logo'>
            <a href='/'>
            <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'/>
            </a>
        </div>
        <div className='header--user'>
            <a href='/'>
            <img src='https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png'/>
            </a>
        </div>
    </header>
)

}