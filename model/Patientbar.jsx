import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'


export default function () {
  return (
    <div className='w-64 h-screen rounded-xl bg-gradient-to-r from-sky-500 to-emerald-300'>
        <div className='text-center py-10 text-white space-y-6'>
            <Link href='/upload'>
            <Button value='Upload Report'/><br/>
            </Link>
            
            <Button value='View Report'/><br/>
            <Button value='Booking'/><br/>
            <Button value='Alert Settings'/><br/>
        </div>

        
    </div>
  )
}
