import React from 'react'
import branch from "./images/branch2.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import Superpowers from './Superpowers'

  function Main() {
    const navigate = useNavigate();
    return (
      <><div>
        
   
        <p class="w-full colour:black font-serif ... font-extralight text-9xl text-center absolute bottom-40 top-60 left-0 right-0 ">Synergy</p>
      </div><div>
          <img src={branch} alt='logo'></img>
        </div>
        <div class="flex flex-col items-center">
          <button onClick={()=> navigate("/super")} class="rounded-lg bg-red-300 colour:red font-serif text-3xl " > Learn your superpowers!</button>
        
        </div>
    
            </>
       
    )

  }
 

export default Main
