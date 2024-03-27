
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Button from './Button';

const Header  = () => {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <div className='w-full flex relative px-2.5 items-center'>
        <div className='font-black text-3xl text-gray-900' data-aos-duration='1000' data-aos="fade-up"><a href="">#Vanlife</a></div>
        <div className='absolute right-10' data-aos-duration='1000' data-aos='fade-up'>
            <ul className='list-none flex flex-wrap gap-3 text-lg items-center'>
                <li className=''><a href='/' aria-current='page'>Home</a></li>
                <li className=''><a href=''>About</a></li>
                <li className=''><a href=''>Vans</a></li>
                <li className=''><a href=""><Button name='Sign-up' active={true}/></a></li>
                <li className=''><a href=""><Button name='Login'/></a></li>
            </ul>


        </div>
    </div>
  )
}

export default Header