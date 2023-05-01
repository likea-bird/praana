import Input from '@/components/Input'
import React from 'react'
import Link from 'next/link'

export default function Booking() {
  return (
   <div>

        <div  className="py-8">
            <p className="text-center text-3xl font-bold"> PRAAN  </p>
            <p className="text-center text-2xl font-bold text-blue-400">Booking slots</p>
        </div > 

        <div className='flex justify-center items-center'>  
            <form id="labform" className="flex flex-col items-center w-96  space-y-8  text-center font-bold ">
                <Input name='Name' label='Name'/>
                
                
                <div className='flex space-x-4  w-full justify-between'>
                <label for="mobilenumber"> Mobile number</label>
                    <input type="number" id="mobilenumber" name="mobilenumber" className="border border-black rounded-lg px-2" />
                     </div>
            
                     
                        

                    <div className='flex justify-center items-center'>
                        <label for="availability"> Appointment request date</label>
                        <input type="date" id="yes" name="availability" className="flex flex-col items-center w-96  space-y-8  text-center font-bold" />
                         </div>
                
                         <div className='flex justify-center items-center'>
                        <label for="availability"> Appointment request</label><br />
                        <input type="radio" id="yes" name="availability" className="flex flex-col items-center w-9  space-y-5  text-center font-bold" />Morning 
                        <input type="radio" id="yes" name="availability" className="flex flex-col items-center w-9  space-y-5  text-center font-bold" />Afternoon
                        
                         </div>
                

                <div className='flex justify-center items-center'>
                <h5>Slot time:&nbsp;  </h5>
                <div className='flex space-x-5' >
                   
                    <label for="from"> From </label>
                    <input type="time" id="from" name="from" className="flex flex-col items-center w-15  space-y-8  text-center font-bold border border-black rounded-lg px-2" />
                    <label for="to"> To </label>
                    <input type="time" id="to" name="to" className="flex flex-col items-center w-15  space-y-8  text-center font-bold border border-black rounded-lg px-2" />
                     
                </div>
                   
                </div>

                <div className='flex justify-center items-center'>
                        <label for="availability"> Confirm request by</label><br />
                        <input type="radio" id="email" name="availability" className="flex flex-col items-center w-9  space-y-5  text-center font-bold" />Email 
                        <input type="radio" id="mobile" name="availability" className="flex flex-col items-center w-9  space-y-5  text-center font-bold" />Mobile
                        
                         </div>
                  

                
                <Link href='/patientdash'>
                    <button className='bg-blue-400 px-4 py-2 rounded-md w-60 text-white' type="submit" form="labform" value="Submit">Submit</button>
                </Link>
            </form>
        </div> 
        
    

    </div>
  )
}


