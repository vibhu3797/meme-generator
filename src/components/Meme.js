import React from 'react'
import memesData from "./../memesData.js"

export default function Meme() {

    const [memeImage, setmemeImage] = React.useState("")

    function getMemeImage() {

        setmemeImage("state changed")


        const memesArray = memesData.data.memes
        // console.log(memesArray)
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setmemeImage(memesArray[randomNumber].url)
        console.log(memeImage)
        
        // memesArray[randomNumber].url  <-- this line is incomplete!
        
    }

   return( 
   <div className='meme'>
        <div className='form'>
            <input 
                type='text' 
                className='form--input'
                placeholder='Top Text' 
            />
            <input 
                type='text' 
                className='form--input' 
                placeholder='Bottom Text' 
            />
            <button className='form--button' onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>
        <img src={memeImage} alt='memeImage'/>
    </div>
   )
}