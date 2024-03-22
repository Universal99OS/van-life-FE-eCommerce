import React from 'react'

const VanOptions = () => {
  return (
    <div className='flex flex-col gap-y-3'>
        <div className='font-semibold text-4xl text-heading-black'>Explore Our Van Options</div>
        <div className='flex flex-row gap-2 items-center justify-items-center'>
            <button className='bg-light-yellow py-2 px-3 box-border rounded-md text-lg  text-dark-grey' type='button'>Luxury</button>
            <button className='bg-light-yellow py-2 px-3 box-border rounded-md text-lg  text-dark-grey' type='button'>Rugged</button>
            <button className='bg-light-yellow py-2 px-3 box-border rounded-md text-lg  text-dark-grey' type='button'>Simple</button>
            <div className='underline text-dark-grey pl-5'>Clear filters</div>

        </div>
    </div>
  )
}

export default VanOptions