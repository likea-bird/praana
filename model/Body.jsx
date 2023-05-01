import Hbutton from '@/components/Hbutton'
import Link from 'next/link'
import React from 'react'

export default function Body() {
  return (
    <div className="bg-[url('/img/hpic.jpg')] w-full flex flex-col px-6 py-20 space-y-5">
        <h2 className="text-5xl font-sans">The Onestop For All<br/>
        Your Medical Records</h2>
        <p>Place where all your medical records are at your doorstep,<br/>Enjoy easy and healthier life.</p>
        <Link href='/register'>
        
        <Hbutton value="Sign Up For Free" width='w-60' height='h-12'/> 
        </Link>
    </div>
  )
}
