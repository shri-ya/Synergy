import React from 'react'
import branch from './images/brachmod.png'
import { useRef } from 'react'

function Emotion() {
  const inputRef = useRef(null);
  function handleClick(){
    console.log(inputRef.current.value);
  }
return (
    <div>
        <h3 class="w-full colour:black font-serif font-semibold text-5xl text-center absolute top-48 left-1">I want to tell you how I'm feeling today</h3>
        <div class="absolute top-44 left-14">
        <img src={branch} alt='logo'></img>
        </div>      
        <div class="absolute top-72 left-1/3">
        <input 
        ref={inputRef}
        type="text"
        class=" px-20 py-2 absolute left-76">
        </input>
        </div>
        <button class="px-20 py-2 justify-center absolute left-1/3 bottom-28 rounded-lg bg-red-200 text-brown-900 hover:text-white font-serif text-4xl"
        onClick={handleClick}> Enter</button>
    </div>

  )
}

export default Emotion