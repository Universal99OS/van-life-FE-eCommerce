'use client'

import Header from '@/app/components/Header'
import VanOptions from '@/app/components/VanOptions'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { vanDetails } from '@/app/data';
import VanPriceCard from '@/app/components/VanPriceCard';


const Van = () => {
  useEffect(()=>{
    AOS.init();
  },[])

  
  return (
    <div className='grid grid-cols-6 gap-y-4'>
        <div className='col-span-6'><Header/></div>
        <div className='col-span-6 m-3' data-aos='zoom-in' data-aos-duration='2000'><VanOptions/></div>
        {vanDetails.map((value,index)=>(
           
            <div className='col-span-2 flex justify-center'>
              <VanPriceCard {...value}/>
            </div>
        ))}


    </div>
  )
}

export default Van