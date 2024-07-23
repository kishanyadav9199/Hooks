import React, { useEffect } from 'react'
import { useState } from 'react'

const Hero = () => {
    const [number, setnumber] = useState(0)
    useEffect(() => {
      console.log("Counter Mounted");

      return ()=>{
        console.log("Unmount Counter");
      }


    }, [])

  
    useEffect(() => {
      console.log("Counter Updated");
    }, [number])
    
    const handleAdd = () => {
        if(number==20)
        return alert('Limit reached')
        setnumber(number + 1)
        
    }
    const handleDec = () => {
       if(number==0)
       return alert('Limit reached')
       setnumber(number - 1)
    }
  return (
    <div>
      <div className='flex justify-center items-center pt-40 flex-col gap-6  '>
        <h1 className='w-40 h-40 rounded bg-red-400 items-center text-center text-5xl pt-16  text-white font-semibold '>
           {number}
        </h1>
        <button onClick={handleAdd} className='px-10 py-2 bg-red-500 rounded-full'>Add</button>
        <button onClick={handleDec} className='px-10 py-2 bg-red-500 rounded-full'>Dec</button>
      </div>
      
    </div>
  )
}

export default Hero
