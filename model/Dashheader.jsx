import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

export default function Dashheader() {
  return (
    <div className="flex justify-between items-center bg-white h-24 px-4">
        <p className="font-bold text-lg">PRAAN</p>
        <div className='flex space-x-4'>
            <Button value="Edit Profile"/>
            <Link href='/'>
            <Button value="Logout"/>
            </Link>
        </div>
    </div>
  )
}
