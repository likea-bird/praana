import Input from '@/components/Input'
import React from 'react'
import Link from 'next/link'

export default function labregistration() {
  return (
   <div>

        <div  className="py-8">
            <p className="text-center text-3xl font-bold"> PRAAN  </p>
            <p className="text-center text-2xl font-bold text-blue-400">Lab Registration </p>
        </div > 

        <div className='flex justify-center items-center'>  
            <form id="labform" className="flex flex-col items-center w-96  space-y-8  text-center font-bold ">
                <Input name='labname' label='Laboratory name'/>
                
                
                <div className='flex space-x-4  w-full justify-between'>
                <label for="mobilenumber"> Mobile number</label>
                    <input type="number" id="mobilenumber" name="mobilenumber" className="border border-black rounded-lg px-2" />
                     </div>
            
                     
                        <div className='flex space-x-4  w-full justify-between'> 
                    <label for="address"> Address</label>
                        <input type="text" id="address" name="address" className="border border-black rounded-lg px-2 " />
                    </div>


                    <div className='flex space-x-4  w-full justify-between'> 
                    <label for="address"> City</label>
                        <input type="text" id="city" name="city" className="border border-black rounded-lg px-2 " />
                    </div>


                    <div className='flex space-x-4  w-full justify-between'> 
                    <label for="address"> Country</label>
                        <input type="text" id="country" name="country" className="border border-black rounded-lg px-2 " />
                    </div>
                     

                        <div className='flex space-x-4  w-full justify-between'>
                    <label for="pincode"> Pin code</label>
                        <input type="number" id="pincode" name="pincode" className="border border-black rounded-lg px-2" />
                        </div>
            

                    <div className='space-x-1'>
                        <label for="availability"> Are you available for booking purpose? </label>
                            <input type="radio" id="yes" name="availability" className="border border-black rounded-lg px-2" />Yes
                            <input type="radio" id="no" name="availability" className="border border-black rounded-lg px-2"/>No
                    </div>
                
                
                <div className='space-x-3'>
                Lab timing:  
                
                    <label for="from"> From </label>
                    <input type="time" id="from" name="from" className="border border-black rounded-lg px-2" />
                    
                    <label for="to"> To </label>
                    <input type="time" id="to" name="to" className="border border-black rounded-lg px-2" />
                </div>

                    <div className='flex space-x-4  w-full justify-between'>
                    Laboratory certification:
                    <label for="labcertificate"></label>
                    <input type="file" id="labcertificate" name="labcertificate"/>
                    </div>

                
                <Link href='/Login'>
                    <button className='bg-blue-400 px-4 py-2 rounded-md w-60 text-white' type="submit" form="labform" value="Submit">Submit</button>
                </Link>
            </form>
        </div> 
        
    

    </div>
  )
}


