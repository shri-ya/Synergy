import React from 'react'
import branch from './images/brachmod.png'
import { useNavigate } from 'react-router-dom'

function Analysis() {
  const navigate = useNavigate();
  return (
   <><div>
          <h3 class="w-full colour:black font-serif font-semibold text-5xl text-center absolute top-80 left-1">Let's understand how you're feeling today</h3>
          <button onClick={()=> navigate("/emotion")} class="rounded-lg bg-red-300 colour:red font-serif text-3xl text-center absolute bottom-32 left-40"> I want to tell you how I feel!</button>
          <button onClick={()=> navigate("/mood") }class="rounded-lg bg-red-300 colour:red font-serif text-3xl text-center absolute bottom-32 right-40"> Help me understand my emotions!</button>
          <div class="absolute top-44 left-14">
          <img src={branch} alt='logo'></img>
        </div>
      </div>
      </>
  )
}

export default Analysis