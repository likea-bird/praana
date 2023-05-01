import React from 'react'
import Button from '@/components/Button'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-white  h-24 px-4" > 
            <Link href='/'>
    <p className="font-bold text-lg  ">PRAAN</p>
            </Link>
        <div className='space-x-2'>
            {/* <Link href='/register'> */}
            <Button value="About"/>
            {/* </Link> */}
            <Link href='/Login'>
            <Button value="Login"/>
            </Link>
            <Link href='/register'>
            <Button value="Register"/>
            </Link>
        </div>
    </div>
  )
}
