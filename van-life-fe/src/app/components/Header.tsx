
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Header  = () => {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <div className='w-full flex relative px-2.5'>
        <div className='font-black text-3xl text-gray-900' data-aos-duration='1000' data-aos="fade-up">#Vanlife</div>
        <div className='absolute right-10' data-aos-duration='1000' data-aos='fade-up'>
            <ul className='list-none flex flex-wrap gap-3'>
                <li className=''><a href=''>Home</a></li>
                <li className=''><a href=''>About</a></li>
                <li className=''><a href=''>Vans</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header