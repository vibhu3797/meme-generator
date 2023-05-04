import React from 'react'
import troll from './../images/troll.png'


export default function Header() {
    return (
        <header className='header'>
            <img src={troll} className='header--image' alt='logo'/>
            <h1 className='header--title'>Meme Generator</h1>
            <h4 className='header--project'>React Course - Project</h4>
        </header>
    )
}