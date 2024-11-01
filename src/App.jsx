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
</div>
  );
 

}

export default App
