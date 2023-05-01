import React from 'react'
import Header from '@/model/Header'
import Link from 'next/link'
export default function(){
  return(
    <>
    <Header/>
    <div className="bg-[url('/img/hpic.jpg')] flex flex-row items-center justify-center py-36">
      <div className='rounded-xl flex flex-row w-72 justify-center items-center h-auto bg-gradient-to-r from-sky-500 to-emerald-300'>
        <div className='px-4 text-zinc-100 text-center py-5'>
          < p className='py-4 text-lg font-bold'> REGISTER</p>
          <label for="name"> FullName</label><br/>
          
          <input type="text" id="name" name="name" className='w-full rounded text-black' /> <br/>


          <label for="Mobile No"> Mobile No</label><br/>
          <input type="number" id="number" name="number"className='w-full rounded text-black' /><br/>


          <label for="password"> Create Password </label><br/>
          <input type="password" id="password" className='w-full rounded text-black'  /><br/>


          <label for="password"> Confirm Password </label><br/>
          <input type="password" id="password" className='w-full rounded text-black' /><br/>
        
          <Link href='/verify'>
            <button className='rounded-md bg-teal-500 w-60 mt-3 drop-shadow-lg'>Register</button>
          </Link>
          
        </div>
      </div>
    </div>
  </>
    )
  
  }
  