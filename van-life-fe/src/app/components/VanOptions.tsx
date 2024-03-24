import React, { useContext } from 'react';
import { btnActive } from '../(pages)/van/page';

const VanOptions = () => {
  const { btnUpdate, setBtnUpdate }: any = useContext(btnActive);

  return (
    <div className='flex flex-col gap-y-3'>
      <div className='font-semibold text-4xl text-heading-black'>Explore Our Van Options</div>
      <div className='flex flex-row gap-2 items-center justify-items-center'>
        <button className={`${!btnUpdate.luxurybtnActive ? 'bg-light-yellow text-dark-grey' : 'bg-btn-black text-light-yellow'} py-2 px-3 box-border rounded-md text-lg   hover:bg-btn-black hover:text-light-yellow`} type='button' onClick={() => {
          setBtnUpdate((pre: any) => {
            return {
              ...pre,
              'luxurybtnActive': !pre.luxurybtnActive

            }
          })
        }}>Luxury</button>
        <button className={`${!btnUpdate.ruggedbtnActive ? 'bg-light-yellow text-dark-grey' : 'bg-dark-green text-light-yellow '}  py-2 px-3 box-border rounded-md text-lg   hover:bg-dark-green hover:text-light-yellow`} type='button' onClick={() => {
          setBtnUpdate((pre: any) => {
            return {
              ...pre,
              'ruggedbtnActive': !pre.ruggedbtnActive

            }
          })
        }}>Rugged</button>
        <button className={`${!btnUpdate.simplebtnActive ? 'bg-light-yellow text-dark-grey' : 'bg-orange-bg text-light-yellow'} bg-light-yellow py-2 px-3 box-border rounded-md text-lg  text-dark-grey hover:bg-orange-bg hover:text-light-yellow`} type='button' onClick={() => {
          setBtnUpdate((pre: any) => {
            return {
              ...pre,
              'simplebtnActive': !pre.simplebtnActive

            }
          })
        }}>Simple</button>
        <div className='underline text-dark-grey pl-5 cursor-pointer' onClick={() => {
          setBtnUpdate({
            luxurybtnActive: false,
            simplebtnActive: false,
            ruggedbtnActive: false,
          })
        }}>Clear filters</div>

      </div>
    </div>
  )
}

export default VanOptions