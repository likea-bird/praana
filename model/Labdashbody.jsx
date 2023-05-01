import React from 'react'
import Link from 'next/link'


export default function Labdashbody() {
  return (
    <div className="bg-[url('/img/hpic.jpg')] h-screen w-screen flex flex-row justify-center items-center">
      
        <div className=' space-x-48 flex justify-between items-center'>
          <Link href='/upload'>
            <button className='rounded-md bg-gradient-to-r from-sky-500 to-emerald-300 w-72 h-60 drop-shadow-lg text-center  text-slate-50 text-2xl' >Upload Report </button>
          </Link>
            <button className='rounded-md bg-gradient-to-r from-sky-500 to-emerald-300 w-72 h-60 drop-shadow-lg text-center  text-slate-50 text-2xl' >Booking Requests</button>
            
        </div>   
    </div>

    
  )
}