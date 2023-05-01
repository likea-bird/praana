import React from 'react'
import Header from '@/model/Header'
import Link from 'next/link'


export default function doctordash() {
  return (
    <div>
        <Header/>
        <div className="bg-[url('/img/hpic.jpg')] h-screen w-screen flex flex-row justify-center items-center">
      
        <div className=' space-x-48 flex justify-between items-center'>
            <Link href='/patientregistration'>
                <button className='rounded-md bg-gradient-to-r from-sky-500 to-emerald-300 w-72 h-60 drop-shadow-lg text-center  text-slate-50 text-2xl' >Patient </button>
            </Link>
            
            <Link href='/doctorregistration'>
                <button className='rounded-md bg-gradient-to-r from-sky-500 to-emerald-300 w-72 h-60 drop-shadow-lg text-center  text-slate-50 text-2xl' >Doctor</button>
            </Link>
                
            <Link href='/labregistration'> 
                <button className='rounded-md bg-gradient-to-r from-sky-500 to-emerald-300 w-72 h-60 drop-shadow-lg text-center  text-slate-50 text-2xl' >Laboratory</button>
            </Link> 
        </div>   
    </div>
    </div>
  )
}