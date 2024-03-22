'use client'

import Header from '@/app/components/Header'
import VanOptions from '@/app/components/VanOptions'
import React from 'react'

const Van = () => {
  return (
    <div className='grid grid-cols-6 gap-y-4'>
        <div className='col-span-6'><Header/></div>
        <div className='col-span-6 m-3'><VanOptions/></div>

    </div>
  )
}

export default Van