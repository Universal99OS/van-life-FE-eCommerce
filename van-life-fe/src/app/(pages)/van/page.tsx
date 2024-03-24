'use client'

import Header from '@/app/components/Header'
import VanOptions from '@/app/components/VanOptions'
import React, { createContext,  useEffect, useMemo, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { vanDetails } from '@/app/data';
import VanPriceCard from '@/app/components/VanPriceCard';

export const btnActive=createContext({});

const Van = () => {
  useEffect(()=>{
    AOS.init();
  },[])

  const[btnUpdate,setBtnUpdate]=useState({
    luxurybtnActive:false,
    simplebtnActive:false,
    ruggedbtnActive:false,
  })

  const luxuryVans=useMemo(()=>{
    return vanDetails.filter(van=>van.type==='Luxury');
  },[])

  const simpleVans=useMemo(()=>{
    return vanDetails.filter(van=>van.type==='Simple');
  },[])

  const ruggedVAns=useMemo(()=>{
    return vanDetails.filter(van=>van.type==='Rugged');
  },[])

  
  return (
    <btnActive.Provider value={{
      btnUpdate,
      setBtnUpdate
    }
    }>
    <div className='grid grid-cols-6 gap-y-4'>
        <div className='col-span-6'><Header/></div>
        <div className='col-span-6 m-3' data-aos='zoom-in' data-aos-duration='2000'><VanOptions/></div>
        {(btnUpdate.luxurybtnActive) &&
        luxuryVans.map((value,index)=>{
          return <div className='col-span-2 flex justify-center'>
          <div data-aos="flip-up" data-aos-duration='2000'><VanPriceCard {...value}/></div>
        </div>
        })
        }
        {(btnUpdate.simplebtnActive) &&
        simpleVans.map((value,index)=>{
          return <div className='col-span-2 flex justify-center'>
          <div data-aos="flip-up" data-aos-duration='2000'><VanPriceCard {...value}/></div>
        </div>
        })
        }
        {(btnUpdate.ruggedbtnActive) &&
        ruggedVAns.map((value,index)=>{
          return <div className='col-span-2 flex justify-center'>
          <div data-aos="flip-up" data-aos-duration='2000'><VanPriceCard {...value}/></div>
        </div>
        })
        }
        {(!btnUpdate.ruggedbtnActive && !btnUpdate.simplebtnActive && !btnUpdate.luxurybtnActive) &&
        vanDetails.map((value,index)=>{
          return <div className='col-span-2 flex justify-center'>
          <div data-aos="flip-up" data-aos-duration='2000'><VanPriceCard {...value}/></div>
        </div>
        })
        }

        


        {/* {vanDetails.map((value,index)=>(
           
            <div className='col-span-2 flex justify-center'>
              <VanPriceCard {...value}/>
            </div>
        ))} */}


    </div>
    </btnActive.Provider>
  )
}

export default Van