import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (

<div className='background'>
  <input type='text' placeholder='SEARCH' className='searchBar'></input>
  <button className='button'>GO</button>
  <div className='profile'>
    <img src='/images/wallpaperflare.com_wallpaper.jpg' className='thumbnail'></img>
    <p className='detail'> Astranaut floating in space caught in 4k | ISS Live 2024</p>

  </div>
  
<div className='card'>
  <img src='/images/ar-qr-code-demo-nike.webp' class='codeImage'></img>
</div>
<div className='profile'>
    <img src='/images/133516637261915553.jpg' className='thumbnail'></img>
    <p className='detail'> Skyscraper live video from dubai caught in 4k | DUBAI 2024</p>

  </div>
  <div className='divisions'>
    <div className='division1'>
      <div className='common'><h1>Contact</h1>
    <p>email : abc@bbc.com</p>
    <p>Ph no: 889998987</p>
    </div>
    </div>
    <div className='division2'><p>DIVISION 2</p></div>
    <div className='division3'><p>DIVISION 3</p></div>
  </div>
</div>
  );
 

}

export default App
